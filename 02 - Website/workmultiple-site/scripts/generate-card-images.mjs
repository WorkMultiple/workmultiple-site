/**
 * generate-card-images.mjs
 *
 * Generates branded article card images for the WorkMultiple blog.
 * Uses Satori (HTML/CSS → SVG) + @resvg/resvg-js (SVG → PNG).
 * Fetches tool logos from the web and caches them locally.
 *
 * Usage:
 *   node scripts/generate-card-images.mjs           # generate missing cards
 *   node scripts/generate-card-images.mjs --force    # regenerate all cards
 *
 * Output: public/images/cards/{slug}.png (1200x630, OG-compatible)
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CONTENT_DIR = join(ROOT, 'src', 'content', 'blog');
const OUTPUT_DIR = join(ROOT, 'public', 'images', 'cards');
const FONT_DIR = join(__dirname, 'fonts');
const LOGO_DIR = join(__dirname, 'logos');

const force = process.argv.includes('--force');

// Ensure output dirs exist
if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });
if (!existsSync(LOGO_DIR)) mkdirSync(LOGO_DIR, { recursive: true });

// Load fonts (woff format, latin subset from @fontsource/inter)
const interRegular = readFileSync(join(FONT_DIR, 'Inter-Regular.woff'));
const interBold = readFileSync(join(FONT_DIR, 'Inter-Bold.woff'));
const interExtraBold = readFileSync(join(FONT_DIR, 'Inter-ExtraBold.woff'));

// Brand colors
const COLORS = {
  bg: '#09090b',
  surface: '#121214',
  accent: '#00e5ff',
  accentSecondary: '#6366f1',
  text: '#f8fafc',
  textSecondary: '#a1a1aa',
  textMuted: '#71717a',
  border: '#27272a',
};

// Article type configs
const TYPE_CONFIG = {
  comparison: {
    accentGlow: 'rgba(99, 102, 241, 0.25)',
  },
  review: {
    accentGlow: 'rgba(0, 229, 255, 0.25)',
  },
  guide: {
    accentGlow: 'rgba(16, 185, 129, 0.25)',
  },
  story: {
    accentGlow: 'rgba(245, 158, 11, 0.25)',
  },
};

/**
 * Tool logo registry.
 * Prefer SimpleIcons (`icon`, `color`) for flawless SVGs.
 * Fallback to icon.horse using the `domain`.
 */
const TOOL_CONFIGS = {
  'zapier': { icon: 'zapier', color: 'FF4A00', domain: 'zapier.com' },
  'make': { icon: 'make', color: 'white', domain: 'make.com' },
  'notion': { icon: 'notion', color: 'white', domain: 'notion.so' },
  'notion ai': { icon: 'notion', color: 'white', domain: 'notion.so' },
  'claude': { icon: 'anthropic', color: 'white', domain: 'claude.ai' },
  'chatgpt': { icon: 'openai', color: 'white', domain: 'openai.com' },
  'openai': { icon: 'openai', color: 'white', domain: 'openai.com' },
  'airtable': { icon: 'airtable', domain: 'airtable.com' },
  'n8n': { icon: 'n8n', color: 'EA4B71', domain: 'n8n.io' },
  'slack': { icon: 'slack', domain: 'slack.com' },
  'asana': { icon: 'asana', domain: 'asana.com' },
  'monday.com': { icon: 'mondaydotcom', domain: 'monday.com' },
  'clickup': { icon: 'clickup', domain: 'clickup.com' },
  'linear': { icon: 'linear', domain: 'linear.app' },
  'grammarly': { icon: 'grammarly', domain: 'grammarly.com' },
  'semrush': { icon: 'semrush', domain: 'semrush.com' },
  'hubspot': { icon: 'hubspot', domain: 'hubspot.com' },
  'mailchimp': { icon: 'mailchimp', domain: 'mailchimp.com' },
  'substack': { icon: 'substack', domain: 'substack.com' },
  'calendly': { icon: 'calendly', domain: 'calendly.com' },
  'loom': { icon: 'loom', domain: 'loom.com' },
  'figma': { icon: 'figma', domain: 'figma.com' },
  'canva': { icon: 'canva', domain: 'canva.com' },
  'perplexity': { icon: 'perplexity', domain: 'perplexity.ai' },
  
  'tidio': { domain: 'tidio.com' },
  'freshsales': { domain: 'freshworks.com' },
  'superhuman': { domain: 'superhuman.com' },

  // No SimpleIcons available or better fetched directly:
  'beehiiv': { domain: 'beehiiv.com' },
  'jasper': { domain: 'jasper.ai' },
  'copy.ai': { domain: 'copy.ai' },
  'reclaim ai': { domain: 'reclaim.ai' },
  'reclaim': { domain: 'reclaim.ai' },
  'motion': { domain: 'usemotion.com' },
  'kit': { domain: 'kit.com' },
  'surfer seo': { domain: 'surferseo.com' },
  'convertkit': { domain: 'convertkit.com' },
  'midjourney': { domain: 'midjourney.com' },
};

/**
 * Fetch a tool's logo and cache it locally. Returns base64 data URI or null.
 */
async function getLogoDataUri(toolName) {
  const key = toolName.toLowerCase().trim();
  const config = TOOL_CONFIGS[key];
  if (!config) {
    console.log(`         [logo] No config mapped for "${toolName}", skipping logo`);
    return null;
  }

  const domainStr = config.domain.replace(/\./g, '_');
  const cacheBase = join(LOGO_DIR, `${domainStr}_${config.icon || 'default'}`);
  
  // Check caches (.svg first, then .png)
  if (existsSync(`${cacheBase}.svg`)) {
    const buf = readFileSync(`${cacheBase}.svg`);
    return `data:image/svg+xml;base64,${buf.toString('base64')}`;
  }
  if (existsSync(`${cacheBase}.png`)) {
    const buf = readFileSync(`${cacheBase}.png`);
    return `data:image/png;base64,${buf.toString('base64')}`;
  }

  // 1. Try SimpleIcons for flawless SVG vector
  if (config.icon) {
    const color = config.color || 'white';
    const url = `https://cdn.simpleicons.org/${config.icon}/${color}`;
    try {
      console.log(`         [logo] Fetching SimpleIcon for ${config.icon}...`);
      const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
      if (res.ok) {
        const text = await res.text();
        if (text.includes('<svg')) {
          const buf = Buffer.from(text);
          writeFileSync(`${cacheBase}.svg`, buf);
          console.log(`         [logo] Cached SimpleIcon ${config.icon}`);
          return `data:image/svg+xml;base64,${buf.toString('base64')}`;
        }
      }
    } catch (err) {
      console.log(`         [logo] SimpleIcons failed for ${config.icon}, trying fallback...`);
    }
  }

  // 2. Try icon.horse
  const url = `https://icon.horse/icon/${config.domain}`;
  try {
    console.log(`         [logo] Fetching icon.horse for ${config.domain}...`);
    const res = await fetch(url, { headers: {'Accept': 'image/svg+xml,image/png'}, signal: AbortSignal.timeout(8000) });
    if (res.ok) {
      const arrayBuf = await res.arrayBuffer();
      const buf = Buffer.from(arrayBuf);
      if (buf.length > 500) { // skip tiny transparent generic fallbacks
        const mime = res.headers.get('content-type') || 'image/png';
        const ext = mime.includes('svg') ? '.svg' : '.png';
        writeFileSync(`${cacheBase}${ext}`, buf);
        console.log(`         [logo] Cached icon.horse ${config.domain}`);
        return `data:${mime};base64,${buf.toString('base64')}`;
      }
    }
  } catch(err) {
    console.log(`         [logo] icon.horse failed for ${config.domain}`);
  }

  // 3. Fallback to Google Favicon
  const googleUrl = `https://www.google.com/s2/favicons?domain=${config.domain}&sz=256`;
  try {
    console.log(`         [logo] Fetching Google fallback for ${config.domain}...`);
    const res = await fetch(googleUrl, { signal: AbortSignal.timeout(8000) });
    if (res.ok) {
      const arrayBuf = await res.arrayBuffer();
      const buf = Buffer.from(arrayBuf);
      if (buf.length > 100) {
        writeFileSync(`${cacheBase}.png`, buf);
        console.log(`         [logo] Cached Google fallback ${config.domain}`);
        return `data:image/png;base64,${buf.toString('base64')}`;
      }
    }
  } catch(err) {}
  
  return null;
}

/**
 * Parse frontmatter from a .mdoc or .md file
 */
function parseFrontmatter(content) {
  // Normalize CRLF → LF to handle Windows line endings
  const normalized = content.replace(/\r\n/g, '\n');
  const match = normalized.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  let currentKey = null;
  let inArray = false;
  const lines = match[1].split('\n');
  for (const line of lines) {
    if (line.match(/^\s*-\s+/)) {
      if (inArray && currentKey) {
        if (!fm[currentKey]) fm[currentKey] = [];
        fm[currentKey].push(line.replace(/^\s*-\s+/, '').trim());
      }
      continue;
    }
    const kvMatch = line.match(/^(\w+):\s*(.*)/);
    if (kvMatch) {
      currentKey = kvMatch[1];
      const val = kvMatch[2].trim().replace(/^["']|["']$/g, '');
      if (val === '' || val === '>-') {
        inArray = !val ? true : false;
        fm[currentKey] = val === '>-' ? '' : [];
      } else {
        fm[currentKey] = val;
        inArray = false;
      }
    } else if (currentKey && typeof fm[currentKey] === 'string' && fm[currentKey] === '') {
      fm[currentKey] = line.trim();
    }
  }
  return fm;
}

/**
 * Detect article type from tags and title
 */
function detectType(fm) {
  const tags = fm.tags || [];
  const title = (fm.title || '').toLowerCase();

  if (tags.includes('comparison') || title.includes(' vs ')) return 'comparison';
  if (tags.includes('review') || title.includes('review')) return 'review';
  if (tags.includes('behind-the-build') || tags.includes('business-strategy')) return 'story';
  return 'guide';
}

/**
 * Extract tool names from title for visual treatment
 */
function extractToolNames(title, type) {
  if (type === 'comparison') {
    // Handle 3-way comparisons: "A vs B vs C: ..."
    const threeWayMatch = title.match(/^(.+?)\s+vs\.?\s+(.+?)\s+vs\.?\s+(.+?):/i);
    if (threeWayMatch) return [threeWayMatch[1].trim(), threeWayMatch[2].trim(), threeWayMatch[3].trim()];
    // Handle 2-way comparisons: "A vs B: ..."
    const vsMatch = title.match(/^(.+?)\s+vs\.?\s+(.+?):/i);
    if (vsMatch) return [vsMatch[1].trim(), vsMatch[2].trim()];
  }
  if (type === 'review') {
    const reviewMatch = title.match(/^(.+?)\s+Review/i);
    if (reviewMatch) return [reviewMatch[1].trim()];
  }
  return [];
}

/**
 * Build a logo element for Satori (just the image itself, unconstrained)
 */
function buildLogoElement(logoDataUri, size = 160) {
  if (!logoDataUri) return null;
  return {
    type: 'img',
    props: {
      src: logoDataUri,
      width: size,
      height: size,
      style: {
        objectFit: 'contain',
        display: 'flex',
      },
    },
  };
}

/**
 * Build the Satori JSX-like element tree for a card image
 */
function buildCardMarkup(fm, slug, logoDataUris) {
  const type = detectType(fm);
  const config = TYPE_CONFIG[type] || TYPE_CONFIG.guide;
  const tools = extractToolNames(fm.title || '', type);
  const title = fm.title || slug;
  const displayTitle = title.length > 80 ? title.substring(0, 77) + '...' : title;

  let content;

  if (type === 'story') {
    // Read the fallback WorkMultiple logo locally for story type
    const faviconPath = join(ROOT, 'public', 'favicon.svg');
    let logoDataUri = null;
    try {
      if (existsSync(faviconPath)) {
        const svgBuffer = readFileSync(faviconPath);
        logoDataUri = `data:image/svg+xml;base64,${svgBuffer.toString('base64')}`;
      }
    } catch (e) {
      console.warn('Could not read favicon.svg for story image generation', e);
    }
    const logo = logoDataUri ? buildLogoElement(logoDataUri, 280) : null;
    content = logo || {
      type: 'div',
      props: { style: { fontSize: '80px', fontWeight: 800, color: COLORS.text, letterSpacing: '-0.04em', display: 'flex' }, children: 'WorkMultiple' }
    };
  } else if (type === 'comparison' && tools.length === 3) {
    const logo1 = logoDataUris[0] ? buildLogoElement(logoDataUris[0], 160) : null;
    const logo2 = logoDataUris[1] ? buildLogoElement(logoDataUris[1], 160) : null;
    const logo3 = logoDataUris[2] ? buildLogoElement(logoDataUris[2], 160) : null;

    const vsEl = {
      type: 'div',
      props: {
        style: { fontSize: '36px', fontWeight: 600, color: COLORS.textMuted, display: 'flex' },
        children: 'vs'
      }
    };

    content = {
      type: 'div',
      props: {
        style: { display: 'flex', alignItems: 'center', gap: '40px' },
        children: [
          logo1 || {
            type: 'div',
            props: { style: { fontSize: '48px', fontWeight: 800, color: COLORS.text, letterSpacing: '-0.04em', display: 'flex' }, children: tools[0] }
          },
          vsEl,
          logo2 || {
            type: 'div',
            props: { style: { fontSize: '48px', fontWeight: 800, color: COLORS.text, letterSpacing: '-0.04em', display: 'flex' }, children: tools[1] }
          },
          {
            type: 'div',
            props: {
              style: { fontSize: '36px', fontWeight: 600, color: COLORS.textMuted, display: 'flex' },
              children: 'vs'
            }
          },
          logo3 || {
            type: 'div',
            props: { style: { fontSize: '48px', fontWeight: 800, color: COLORS.text, letterSpacing: '-0.04em', display: 'flex' }, children: tools[2] }
          },
        ]
      }
    };
  } else if (type === 'comparison' && tools.length === 2) {
    const logo1 = logoDataUris[0] ? buildLogoElement(logoDataUris[0], 240) : null;
    const logo2 = logoDataUris[1] ? buildLogoElement(logoDataUris[1], 240) : null;

    content = {
      type: 'div',
      props: {
        style: { display: 'flex', alignItems: 'center', gap: '64px' },
        children: [
          logo1 || {
            type: 'div',
            props: { style: { fontSize: '72px', fontWeight: 800, color: COLORS.text, letterSpacing: '-0.04em', display: 'flex' }, children: tools[0] }
          },
          {
            type: 'div',
            props: {
              style: { fontSize: '48px', fontWeight: 600, color: COLORS.textMuted, display: 'flex' },
              children: 'vs'
            }
          },
          logo2 || {
            type: 'div',
            props: { style: { fontSize: '72px', fontWeight: 800, color: COLORS.text, letterSpacing: '-0.04em', display: 'flex' }, children: tools[1] }
          },
        ]
      }
    };
  } else if (type === 'review' && tools.length === 1) {
    const logo = logoDataUris[0] ? buildLogoElement(logoDataUris[0], 280) : null;

    content = logo || {
      type: 'div',
      props: { style: { fontSize: '80px', fontWeight: 800, color: COLORS.text, letterSpacing: '-0.04em', display: 'flex' }, children: tools[0] }
    };
  } else {
    content = {
      type: 'div',
      props: {
        style: { fontSize: '64px', fontWeight: 800, color: COLORS.text, letterSpacing: '-0.04em', lineHeight: 1.1, maxWidth: '1000px', textAlign: 'center', display: 'flex' },
        children: displayTitle,
      },
    };
  }

  return {
    type: 'div',
    props: {
      style: {
        width: '1200px',
        height: '630px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.surface, // Match the carousel card background precisely! 
        padding: '0',
        fontFamily: 'Inter',
        overflow: 'hidden',
        position: 'relative', // so absolutes work inside
      },
      children: [
        // Grid texture on the canvas (covers exactly half the canvas, fully top to bottom without padding)
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%', // Full width so it spans all articles cards perfectly
              bottom: 0,
              backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              display: 'flex',
            },
          },
        },
        // Actual content block wrapper (pushed to align with carousel center while remaining perfectly centered inside the left half)
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              width: '100%',
            },
            children: [content],
          },
        },
      ],
    },
  };
}

/**
 * Main: iterate all blog posts and generate card images
 */
async function main() {
  const slugs = readdirSync(CONTENT_DIR).filter((d) => {
    const p = join(CONTENT_DIR, d);
    try { return readdirSync(p).some((f) => f.endsWith('.mdoc') || f.endsWith('.md')); }
    catch { return false; }
  });

  console.log(`Found ${slugs.length} blog posts.`);
  console.log(`Logo cache: ${LOGO_DIR}\n`);

  for (const slug of slugs) {
    const outPath = join(OUTPUT_DIR, `${slug}.png`);

    if (!force && existsSync(outPath)) {
      console.log(`  [skip] ${slug} (already exists)`);
      continue;
    }

    // Find the content file
    const dir = join(CONTENT_DIR, slug);
    const files = readdirSync(dir);
    const contentFile = files.find((f) => f.endsWith('.mdoc')) || files.find((f) => f.endsWith('.md'));
    if (!contentFile) {
      console.log(`  [skip] ${slug} (no content file)`);
      continue;
    }

    const raw = readFileSync(join(dir, contentFile), 'utf-8');
    const fm = parseFrontmatter(raw);
    const type = detectType(fm);
    const tools = extractToolNames(fm.title || '', type);

    console.log(`  [gen]  ${slug} (${type})`);

    // Fetch logos for all tools mentioned
    const logoDataUris = [];
    for (const tool of tools) {
      const uri = await getLogoDataUri(tool);
      logoDataUris.push(uri);
    }

    const markup = buildCardMarkup(fm, slug, logoDataUris);

    // Generate SVG with Satori
    const svg = await satori(markup, {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: Buffer.from(interRegular),
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: Buffer.from(interBold),
          weight: 700,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: Buffer.from(interExtraBold),
          weight: 800,
          style: 'normal',
        },
      ],
    });

    // Convert SVG to PNG
    const resvg = new Resvg(svg, {
      fitTo: { mode: 'width', value: 1200 },
    });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    writeFileSync(outPath, pngBuffer);
    console.log(`         -> ${outPath} (${(pngBuffer.length / 1024).toFixed(0)} KB)`);
  }

  console.log('\nDone!');
}

main().catch((err) => {
  console.error('Error generating card images:', err);
  process.exit(1);
});

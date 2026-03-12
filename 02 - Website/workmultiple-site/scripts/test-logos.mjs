const domains = ['make.com', 'zapier.com', 'jasper.ai', 'copy.ai', 'reclaim.ai', 'notion.so', 'beehiiv.com'];
async function check() {
  for (const domain of domains) {
    const res = await fetch(`https://icon.horse/icon/${domain}`);
    const buff = await res.arrayBuffer();
    console.log(domain, res.status, res.headers.get('content-type'), buff.byteLength);
  }
}
check();

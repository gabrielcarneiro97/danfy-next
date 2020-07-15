import { xml2js, ElementCompact } from 'xml-js';

export default function xmlToObj(file : string | { buffer : Buffer }) : ElementCompact {
  if (typeof file === 'string') return xml2js(file, { compact: true });
  return xml2js(file.buffer.toString('utf-8'), { compact: true });
}

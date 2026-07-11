import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { url } from '../lib/utils';

export async function GET(context) {
  const unfinished = await getCollection('unfinished', ({ data }) => !data.draft);
  const essays = await getCollection('essays', ({ data }) => !data.draft);

  const items = [
    ...unfinished.map((e) => ({
      title: e.data.title,
      pubDate: e.data.date,
      description: e.data.summary,
      link: url(`/unfinished/${e.id}/`),
    })),
    ...essays.map((e) => ({
      title: e.data.title,
      pubDate: e.data.date,
      description: e.data.summary,
      link: url(`/essays/${e.id}/`),
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: site.name,
    description: site.description,
    site: context.site,
    items,
  });
}

const defaults = {
  empty: {},

  meta: {
    title: 'Kamsiyonna Etiobi',
    ogTitle: 'Kamsiyonna Etiobi',
    description:
      "Hello, I'm Kamsiyonna, a web developer based in Lagos, Nigeria. I specialize in crafting seamless web experiences to simplify life's complexities. Explore my portfolio to discover a diverse range of projects and creations. This is the V1 of my portfolio, showcasing my skills in Nuxt.js, TypeScript, Tailwind CSS, and DaisyUI. Dive into the world of web development with me!",
    twitterCard: 'summary_large_image'
  } as Parameters<typeof useSeoMeta>[0]
}

type DefaultKeys = keyof typeof defaults

type DefaultValues = typeof defaults

export const useDefault = <K extends DefaultKeys>(defaultName: K): DefaultValues[K] => defaults[defaultName]

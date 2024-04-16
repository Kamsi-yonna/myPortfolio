---
id: 1
title: 'Nuxt Configuration - A personal approach to configuring my Nuxt projects.'
description: 'My first article'
published: 2024/03/09
author: 'Kamsiyonna'
slug: 'Nuxt Configuration'
real: 'Before diving into the details o'
---

Before diving into the details of how I set up my 'nuxt.config.ts' file, I recommend exploring the Nuxt documentation for a comprehensive understanding of its capabilities. This article assumes a reasonable familiarity with Vue and Nuxt concepts.
For those who may need to brush up on Nuxt, consider referring to the official [Nuxt documentation](https://nuxt.com/) or checking out resources like The Net Ninja's [Nuxt playlist](https://www.youtube.com/watch?si=ZR1mIMeCpd5XA5CC&v=GBdO5myZNsQ&feature=youtu.be) on Youtube. I also have this setup in [my-nuxt-template](https://github.com/Kamsi-yonna/my-nuxt-setup) on github, which I would be working on as time goes on.
For those who feel confident and don't need to revise, because revision is self-doubt, Let's begin!

## TABLE OF CONTENT

1. Installing and creating your Nuxt application
2. Utilizing Developer Tools
3. Configuring Page Settings
4. Enabling Server-Side Rendering
5. Customizing Loading Animations
6. Configuring the Development Server
7. The App Configuration
8. CSS file registration
9. The module configuration
10. Global Component Registration
11. Runtime Configuration

## A brief overview of the nuxt configuration file

The Nuxt configuration file serves as a pivotal element in your Nuxt project, allowing you to tailor the development environment to your specific needs. From optimizing build settings to configuring modules, registering components, defining API routes, and more, the `nuxt.config.ts` file offers a centralized space to fine-tune various aspects of your application.
While this guide may not cover every conceivable insight about the nuxt.config.ts file, it offers a glimpse into my own personal best practices and preferences. Whether you're looking to adopt new practices or simply curious about different configuration styles, I hope my personal insights prove valuable in crafting your own Nuxt applications.

## Installing and creating your Nuxt application

Now, open your computers, clear your mind, and take a deep breath. Rub your palms together and join me, as you may need to code along while reading.
To get started with Nuxt.js, I recommend following the official documentation at [Nuxt.com](https://nuxt.com/) . The documentation provides a comprehensive step-by-step guide, covering the essentials of Nuxt.js, along with best practices for development and insights to navigate common pitfalls.
Personally, I prefer the traditional method of installing Nuxt using the CLI provided by the doc. Working in the Git Bash terminal, I run the following command:

```bash
pnpm dlx nuxi@latest init my-nuxt-template
```

I opt for `pnpm dlx` because it tends to handle installations relatively faster.
Once this command runs, I open the project in my VS Code and kickstart the setup process.
The nuxt.config.ts file resides at the root of your Nuxt project and serves as a powerhouse, allowing you to override or extend your application's behavior.
Naturally, before going into the configuration settings, it is important to have a clear idea of the type of application you intend to build, including the dependencies, modules, plugins, and other components you'll utilize. However, if you're seeking a versatile boilerplate that can handle various use cases for Nuxt, this guide is still tailored for you.
By default, the nuxt.config.ts file is set up with the following structure. 
The file exports the defineNuxtConfig function containing an object with all your customizations and configurations. Interestingly, this function is provided by Nuxt.js and is globally available without the need for explicit importing.

_Sounds cool, right?_

## Step 1: Utilizing Developer Tools

```typescript
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }
})
```

The next line you'll notice is `devtools: { enabled: true }.` This is another aspect automatically configured by Nuxt. The devtools feature is particularly intriguing as it provides valuable insights into your application. It displays relationships between your pages, components, composables, and more. For a deeper understanding, I recommend exploring the [NuxtDevTools](https://devtools.nuxt.com) documentation and giving it a try in your personal time.

## Step 2: Configuring Page Settings

```typescript
  pages: true,
```

By now, we're familiar with Nuxt's file-based routing. However, this isn't a default behavior, deliberately chosen to minimize your application's bundle size. Setting `pages: true` is crucial when you want to leverage Nuxt.js's file-based routing system. It ensures that routes are automatically created based on the files in the `~/pages/` directory, and it enables a clean and organized way to structure your Vue components for different routes in your application.

## Step 3: Enabling Server-Side Rendering

```typescript
  ssr: true,
```

In most cases, explicitly setting `ssr: true` in your Nuxt.config.ts file isn't necessary since server-side rendering (SSR) is enabled by default. However, if you find yourself working on projects that don't require SSR, you can easily set it to false with `ssr: false`.
Disabling SSR leads to faster client-side navigation and reduced server load. This approach is suitable for specific use cases such as Single Page Applications (SPAs), like portfolios, interactive dashboards, and single-user admin interfaces. However, it's crucial to carefully consider the specific requirements and goals of your project before deciding to disable SSR. Having this option in the nuxt.config.ts boilerplate provides the flexibility to adapt based on your project's needs.

## Step 4: Customizing Loading Animations

```typescript
  spaLoadingTemplate: false,
```

By setting this to false, you effectively remove the default loading indicator provided by Nuxt. This loading indicator, typically an animated Nuxt icon, is rendered while your Single Page Application (SPA) is being hydrated, especially on pages where server-side rendering (SSR) is disabled or not applicable.

## Step 5: Configuring the Development Server

```typescript
  port: 3002,
```

Specifying the port within devServer is one of the configurations you can set. While the default port is set to 3000, there are common scenarios, especially when working on multiple Nuxt projects simultaneously, where setting a different port becomes beneficial. This is particularly relevant when other applications on your system may be using the default port (3000). By specifying a unique port, like 5000, you can avoid conflicts and ensure smooth execution of your Nuxt.js application.
Consider this customization as a proactive step to prevent clashes and maintain a hassle-free development environment, especially when managing several projects concurrently.

---

Now lets take a moment to catch our breath with some of my top nuxt jokes.

```javascript
"Why did the Nuxt developer move to the mountain?"
 - "To get a calm 'Vue'! :D "

"Why do programmers prefer dark mode?"
  - "Because light attracts bugs!"
"How do you comfort a JavaScript bug?"
  - "You console it! :D "

Now seriously,
The Nuxt DevTools is like having X-ray vision for your application.
Peek into the relationships between your pages, components, and composables.
it gives a whole new level of superhero insight!
```

## Alright, you can stop laughing and lets carry on with the setup.

## Step 6: The App Configuration

```typescript
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
```

Within the app section of your Nuxt.js configuration, you gain the ability to configure global settings for your applications. Let's go over the basics:

- The head property within the app section is particularly focused on configuring the contents of the HTML <head> element. This includes settings for the document title, meta tags, stylesheets, and more.
- The link array within the head property is used to specify links to external resources, such as stylesheets, icons, or other related files. In this case, a link to the favicon (an icon displayed in the browser tab) is defined. I've personalized my favicon with the '⚙' emoji. Feel free to customize that to your preference.
- The htmlAttrs object allows you to set attributes for the <html> element. In this example, the lang attribute is set to "en" to specify that the primary language of the document is English.
- The script array within the head property is responsible for specifying additional script elements to be included in the <head> of the HTML document. These scripts could be external resources or inline scripts crucial for the functionality of the web application.

These settings in the app configuration section provide a centralized way to manage global aspects of your application, such as the favicon, document language, and other head-related elements. It's a convenient place to handle aspects that are common across different pages in your application.

## Step 7: CSS file registration

```typescript
css: [
    "~/assets/css/tailwind/main.css",
    "~/public/css/myProject.webflow.css",
    "~/public/css/main.css"
  ],
```

In the nuxt.config.ts file, the css configuration plays a pivotal role in specifying external CSS files to be included in your Nuxt.js project. This array contains file paths, pointing to your desired stylesheets.
For me, handling designs with Webflow and then seamlessly exporting them into my Nuxt project is a common practice. I also utilize this configuration for registering my Tailwind styles. Having a separate file for all CSS styles across my project is not just crucial but integral to my workflow.
By managing your CSS configuration in the nuxt.config.ts file, you gain centralized control over the styles applied throughout your application. This approach ensures that the specified styles are consistently applied across various components, pages, and layouts.
Additionally, this organization simplifies maintenance and allows for easy modifications. Whether you're incorporating custom styles, external libraries, or third-party CSS files, this configuration serves as a convenient way to streamline your project's styling setup.

## Step 8: The module configuration

```typescript
modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxt/ui",
   ],
```

In the nuxt.config.ts file, the modules configuration plays a vital role in extending the functionality of your Nuxt.js project. 
Nuxt.js modules are essentially packages that can be added to enhance your project with features such as routing enhancements, state management, server-side rendering optimizations, and much more.
For my preferred boilerplate, I would include Tailwind, Google Fonts, and Nuxt Icon and Nuxt Ui which I just happen use recently. This modular approach allows you to tailor your Nuxt.js project to suit your specific needs by selectively incorporating features that enhance your development experience.

## Step 9: Global Component Registration

```typescript
components: [
    '~/components/modals',
    '~/components/shimmers',
    '~/components/widgets',
    '~/components'
  ],
```

The components array in the Nuxt configuration file (nuxt.config.ts) empowers you to globally register Vue components. This global registration eliminates the need for explicit imports in each file, allowing you to use these components seamlessly throughout your Nuxt.js application.
This feature proves especially valuable for commonly used components that you wish to make accessible across your entire project. By default, only the `~/components` directory is scanned. However, you have the flexibility to extend this configuration by adding additional directories or modifying how components are scanned within specific subfolders.
This setup ensures that components residing in these directories are globally registered, providing a centralized and efficient way to manage and use components across different parts of your application.

## Step 10: Runtime Configuration

```typescript
runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
```

Finally, I want a place where to register my Environment Variables `.env` and Private Tokens and Nuxt.js project, the runtimeConfig option in the nuxt.config.ts file provides a designated space to define runtime configuration variables accessible on both the server and client sides during runtime. This proves particularly beneficial for managing sensitive information like API keys or environment-specific settings without exposing them in client-side code.
This configuration allows me to register environment variables and private tokens securely. It's essential to explore this section further in the Nuxt documentation to understand its full capabilities and best practices.

---

## Conclusion

Now we've gladly come to the end of the initial setup.

In this guide, we've explored the ins and outs of my personal nuxt.config.ts file, discovering its various features. From basic tasks like specifying ports and managing styles to more advanced tricks like registering components and handling configurations during runtime.

By tweaking these settings in the nuxt.config.ts file, I'm not just making development smoother but also creating a space that fits my project perfectly. This personalized touch contributes to a hassle-free development experience, letting me focus on crafting outstanding applications.

Whether you're an experienced Nuxt.js developer or diving into the framework for the first time, this guide is here to help you fine-tune your project. It's your companion to simplify tasks, improve workflows, and enhance your overall experience with Vue.js and Nuxt.js.

As you start your Nuxt.js project, think about adjusting your configuration to match your style and project needs. The nuxt.config.ts file is a handy tool to shape your development environment, ensuring a smooth and effective workflow.
I have made the repo for my nuxt template public and I will continue to expand it as I grow. I look forward to hearing from you and seeing how you personally would use the nuxt-config setup.

_Now go ahead and pnpm run dev!_

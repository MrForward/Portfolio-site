# Minimalistic Portfolio

A clean, typography-focused portfolio website built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and Markdown.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/minimal-portfolio.git
    cd minimal-portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 How to Update Content

You can edit almost all the content on the site without touching the complex code.

### 1. Main Pages (Home, About, Work, Contact)

Open the file `data/content.js`. This file contains all the text and links for your site.

**Example Structure:**

```javascript
export const content = {
  home: {
    title: "Hello, I'm",
    name: "Jules", // Change this to your name
    description: "..." // Update your intro text
  },
  work: {
    title: "Selected Work",
    projects: [
      // Add a new project block like this:
      {
        title: 'New Project Name',
        description: 'Description of the project...',
        link: 'https://link-to-project.com',
        year: '2024',
      },
      // ... existing projects
    ]
  },
  // ... similar sections for About and Contact
};
```

Simply change the text inside the quotes `'...'` or `"..."`.

### 2. The Blog

The blog is powered by Markdown files located in the `posts/` folder.

**To add a new post:**

1.  Create a new file in `posts/` with a `.md` extension (e.g., `my-new-post.md`).
2.  At the top of the file, add the "Frontmatter" (metadata) between three dashes:

    ```markdown
    ---
    title: 'My New Post Title'
    date: '2024-01-01'
    description: 'A short summary of the post that appears on the list page.'
    ---
    ```

3.  Write your content below the second `---` using standard Markdown.
    -   `# Heading 1`
    -   `## Heading 2`
    -   `**Bold Text**`
    -   `[Link Text](url)`

### 3. Social Links

Update your social media links in the `contact` section of `data/content.js`.

## 🎨 Customization

-   **Dark Mode:** The site includes a dark mode toggle automatically.
-   **Colors/Fonts:** To change the core styles, you would need to edit `tailwind.config.js` or `styles/globals.css`.

## 📦 Deployment

The easiest way to deploy this app is using [Vercel](https://vercel.com/new) or [Netlify](https://www.netlify.com/).

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel/Netlify.
3.  It will automatically detect Next.js and deploy your site.

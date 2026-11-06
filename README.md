# Rafael Fallorina — UI Design Portfolio

A responsive personal portfolio starter inspired by editorial web design and the urban-futurist graphic language of Zenless Zone Zero. This is an original fan-aesthetic direction, not an official game website.

## Preview locally
1. Download or clone this repository.
2. Open `index.html` in your browser.
3. For a smoother development workflow, use the VS Code extension **Live Server**.

## Publish with GitHub Pages
1. Create a new GitHub repository named `YOUR-USERNAME.github.io` (or any repository name).
2. Upload all files and folders from this project. Keep `index.html` at the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. Wait for GitHub Pages to publish your site.

## Customize your portfolio

### Replace the main button artwork
- Open `assets/ui/`.
- Replace `button-explore.svg` with your own artwork, keeping the same filename and dimensions/aspect ratio.
- You can also edit the image path in `index.html` if you want a different filename.

### Replace project visuals
The project cards currently use HTML/CSS mockups as placeholders. To use your own Figma exports:
1. Export your project cover image as JPG, PNG, or WebP.
2. Put it in `assets/projects/`.
3. In `index.html`, replace the contents of a `.project-visual` link with an image, for example:
   `<img class="project-image" src="assets/projects/my-project.png" alt="Preview of my mobile app design">`
4. Add this rule to `style.css`:
   `.project-image { width: 100%; height: 100%; min-height: 340px; object-fit: cover; display: block; }`

### Update your details
Search `index.html` for:
- `Rafael` / `RAFAEL`
- `PROJECT NAME ONE`, `PROJECT NAME TWO`, `PROJECT NAME THREE`
- `your.email@example.com`
- The introduction and About section text

### Change colors
At the top of `style.css`, edit the variables in `:root`:
- `--ink`: near-black
- `--paper`: warm off-white
- `--acid`: acid yellow
- `--red`: signal red

## Asset organization
- `assets/ui/` — custom buttons, badges, icons, decorative interface pieces
- `assets/projects/` — project screenshots and case-study cover images

## Notes
- No build tools or frameworks required.
- The theme toggle, mobile navigation, and responsive layout are included.
- The sample project cards are clearly placeholders. Replace them with real work or clearly labeled concept projects.
- Add a real contact email before publishing.

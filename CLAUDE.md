# Setting up Projects Overview for someone (instructions for Claude)

The person wants their own copy of this app: a project tracker that runs as an iPhone home-screen app or in a browser, with its data in their own Dropbox. Your job is to get them from nothing to a working app on their phone. **Do the technical steps yourself; guide them, one step at a time, through the few steps only they can do.** Keep your messages short and plain. Assume they're not technical.

## What you need to know

- The whole app is `index.html`, a single static page. It is hosted with GitHub Pages and talks only to Dropbox's API.
- Data: one `projects.json` in the person's Dropbox. The app creates it on first use ("Start a new projects.json").
- The only thing to change in the code is the Dropbox **app key**, on the line `appKey: "…",` near `const DROPBOX` in `index.html`. Change nothing else unless they ask.
- Never put anything personal into the repository: no names of their projects, no folder paths, no data. Their personal settings belong in their own `projects.json`, never in `index.html`.
- They do these steps themselves, and you never do them for them: creating the Dropbox app, signing in to Dropbox, and anything else that asks for a password or a verification code.

## Steps

### 1. Their copy on GitHub

- If `gh` is installed and signed in (`gh auth status`), fork and clone:
  `gh repo fork LukasLaffers/projects-app --clone --default-branch-only`
- If not, ask them to open https://github.com/LukasLaffers/projects-app and click **Fork › Create fork**, then tell you their GitHub username. Clone it with `git clone https://github.com/USERNAME/projects-app`. If git can't sign in to push later, have them make the one edit in step 3 on github.com instead: open `index.html`, click the pencil, change the key and commit.
- Their address will be `https://USERNAME.github.io/projects-app/`, with the username in **lowercase**. Call it ADDRESS below.

### 2. Turn on GitHub Pages

- With `gh`: `gh api -X POST repos/USERNAME/projects-app/pages -f "source[branch]=main" -f "source[path]=/"` (an error saying Pages already exists is fine).
- Without `gh`: ask them to open **Settings › Pages**, choose Deploy from a branch, `main` and `/ (root)`, and click Save.

### 3. Their Dropbox app (they do this; give these exact steps)

1. Open https://www.dropbox.com/developers/apps and click **Create app**.
2. Choose **Scoped access**, then **App folder** (the app then sees only its own folder). Give it any name, for example "Projects-<their name>".
3. In the **Permissions** tab, tick `files.metadata.read`, `files.content.read` and `files.content.write`, then click **Submit**.
4. In the **Settings** tab, under **Redirect URIs**, add exactly ADDRESS, with the `/` at the end, and click Add.
5. Copy the **App key** (not the App secret) and paste it to you.

Put the key into `index.html` (`appKey: "THEIR_KEY",`), commit with the message "Use my Dropbox app key", and push. Leave `demo/` as it is.

### 4. Check it's live

Wait until ADDRESS returns 200 and contains their key. It usually takes 1–2 minutes: `curl -s ADDRESS | grep -c THEIR_KEY`.

### 5. Their phone (they do this; give these exact steps)

1. Open ADDRESS in **Safari** and tap **Share › Add to Home Screen**.
2. Open the new **Projects** icon. Signing in must happen inside the app, not in Safari.
3. Tap **Connect Dropbox** and sign in.
   - If Dropbox asks to confirm the sign-in on another device or by SMS, that's Dropbox's normal check for a new device.
   - If they end up in Safari or the Dropbox app instead of back in Projects, tap **Get a code** in the app. Sign in with email or Google, then copy the code and paste it into the app.
4. Tap **Start a new projects.json**. Done.

On a computer they just open ADDRESS in a browser and sign in the same way.

### 6. Optional: make it theirs

Groups (the headings in the project list), a link next to the tabs and the examples in the diary's day-label box are set in `projects.json` under `"settings"`; the README shows the format. With App folder access the file is at `Dropbox/Apps/<app name>/Projects Overview/projects.json`. If they have the Dropbox desktop app, edit that file (keep everything else exactly as it is). Otherwise tell them where it is.

## Updating later

`gh repo sync USERNAME/projects-app` pulls in new versions. Their `appKey` line must survive: if the sync conflicts on it, keep their key.

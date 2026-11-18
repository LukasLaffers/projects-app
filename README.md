# Projects Overview

A simple tracker for research projects, with a work diary. It runs on your iPhone's home screen, on an iPad, or in any browser on a computer. Your data is one file, `projects.json`, in **your own Dropbox**. Nothing is stored anywhere else.

**[Try the demo →](https://lukaslaffers.github.io/projects-app/demo/)** It has made-up projects. Click around and change anything; nothing is saved.

What you get:

- **Pipeline.** Every project has a stage, from Idea to Published. You can see at a glance how many projects are at each stage.
- **Next steps.** For each project: what's next, who has the next move (you, coauthors, the journal), deadlines and ratings.
- **Diary.** A line or two per day. Start a line with a project's short name (`BEES: new figures`) and it's linked to that project.
- **Everywhere.** It works on your phone and your computer. Edits from either one show up on the other.

---

## Get your own

You need a free **GitHub** account and a **Dropbox** account. It takes about 15 minutes.

### The easy way: let Claude do it

**If you have Claude Code** (in the Claude desktop app, or `claude` in a terminal), say:

```
Set up my own copy of https://github.com/LukasLaffers/projects-app for me. Follow the CLAUDE.md in that repository.
```

Claude copies the app to your GitHub and publishes it. It then walks you through the two things only you can do: creating a Dropbox app and adding the app to your phone.

**If you use Claude on claude.ai or in the Claude phone app,** paste:

```
Help me set up https://github.com/LukasLaffers/projects-app for myself. Read its README, then guide me one step at a time and wait for me after each step.
```

### By hand

1. **Copy the app.** On this page, click **Fork**, then **Create fork**.
2. **Publish it.** In your copy, open **Settings › Pages**. Choose **Deploy from a branch**, then `main` and `/ (root)`, and click **Save**. Your app's address will be `https://YOUR-GITHUB-NAME.github.io/projects-app/`, all in lowercase.
3. **Create a Dropbox app.** Go to [dropbox.com/developers/apps](https://www.dropbox.com/developers/apps) and click **Create app**. Choose **Scoped access**, then **App folder**, and give it any name.
   - **Permissions** tab: tick `files.metadata.read`, `files.content.read` and `files.content.write`, then click **Submit**.
   - **Settings** tab: under **Redirect URIs**, add your address from step 2, with the `/` at the end. Then copy the **App key**.
4. **Add your key.** In your copy on GitHub, open `index.html` and click the pencil to edit. Find `appKey: "` and put your App key between the quotes. Then click **Commit changes**.
5. **Put it on your phone.** Open your address in Safari, tap **Share › Add to Home Screen**, and open the new icon. Tap **Connect Dropbox**, then **Start a new projects.json**.

On a computer, just open the same address in a browser.

**If sign-in doesn't come back to the app:** tap **Get a code**. Sign in to Dropbox with your email or Google, not the "open in the Dropbox app" option. Then copy the code and paste it into the app.

---

## Make it yours

Your groups (the headings in the project list) and an optional link next to the tabs are kept in your own `projects.json`, under `"settings"`:

```json
"settings": {
  "groups": [
    { "id": "main", "label": "Main projects" },
    { "id": "other", "label": "Other projects" },
    { "id": "published", "label": "Published & forthcoming" }
  ],
  "homeLink": { "label": "My website", "url": "https://example.org" },
  "dayHint": "holiday, conference, sick day…"
}
```

With "App folder" access, the file is in your Dropbox under **Apps › (your app's name) › Projects Overview**. Or ask Claude: *"Change my Projects Overview groups to …"*

## Privacy

- The app's page (`index.html`) contains no data and nothing about you.
- Your projects live only in your Dropbox.
- Your Dropbox sign-in is kept only on your own device, and the app talks only to Dropbox.
- With "App folder" access, the app can only see its own folder in your Dropbox, not your other files.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app |
| `demo/` | The demo, with made-up data |
| `CLAUDE.md` | Set-up steps for Claude |
| `manifest.webmanifest`, `icon-*.png` | Home-screen name and icon |

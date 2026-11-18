// Made-up projects and diary for the public demo (projects-app/demo/). Nothing here is real,
// and the topics are deliberately spread across many fields.
// Dates are set relative to today, so the demo always looks current.
window.PO_DEMO = () => {
  const day = (n) => { const t = new Date(); t.setDate(t.getDate() + n); return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`; };
  const at = (n, h = 10) => { const t = new Date(); t.setDate(t.getDate() + n); t.setHours(h, 15, 0, 0); return t.toISOString(); };
  const base = { coauthors: "", tags: [], next: "", due: "", dueWhat: "", codeLoc: "", links: [], notes: "", paused: false,
    needsCheck: false, checkNote: "", priority: "normal", ball: "none", important: 0, urgent: 0, interesting: 0 };
  const P = ({ ago = -20, ...p }) => ({ ...base, ...p, log: p.log || [{ d: day(ago), t: "Project created" }], updated: at(ago) });

  const projects = [
    P({ acr: "BEES", group: "lab", stage: "rr", progress: 85, title: "Pollinator Visits in Urban Gardens",
      coauthors: "Anna Reyes, Tomas Berg", ball: "me", priority: "high", tags: ["Grant A"], important: 5, urgent: 4, interesting: 4,
      next: "Answer reviewer 2; add the second summer of counts.", due: day(12), dueWhat: "Revision due",
      codeLoc: "Shared drive › bees (run main script)", ago: -1,
      links: [{ label: "Preprint", url: "https://example.org/bees-preprint.pdf" }],
      log: [{ d: day(-1), t: "Second summer of counts added" }, { d: day(-30), t: "Stage → R&R" }, { d: day(-120), t: "Submitted to a journal." }] }),
    P({ acr: "COAST", group: "lab", stage: "drafting", progress: 55, title: "Mapping Coastal Erosion with Drone Photos",
      coauthors: "Tomas Berg", ball: "me", tags: ["Grant A"], important: 4, urgent: 2, interesting: 5,
      next: "Write the methods section; check the photo calibration.", codeLoc: "Shared drive › coast", ago: -2 }),
    P({ acr: "SOIL", group: "lab", stage: "submitted", progress: 75, title: "Soil Life and Harvests on Small Farms",
      coauthors: "Anna Reyes", ball: "journal", important: 3, urgent: 1, interesting: 3, next: "Wait for the journal's decision.", ago: -40 }),
    P({ acr: "MEMORY", group: "collab", stage: "analysis", progress: 35, title: "Sleep and Memory in Older Adults",
      coauthors: "Lina Okafor, Pavel Novak", ball: "coauthors", tags: ["Grant B"], important: 3, urgent: 3, interesting: 4,
      next: "Pavel sends the cleaned questionnaire data.", ago: -5 }),
    P({ acr: "READING", group: "collab", stage: "data", progress: 20, title: "Reading Habits of Teenagers",
      coauthors: "Lina Okafor", ball: "me", important: 2, urgent: 1, interesting: 3, next: "Apply for access to the school survey.", ago: -16 }),
    P({ acr: "BRIDGE", group: "collab", stage: "wp", progress: 65, title: "Low-Cost Sensors for Monitoring Old Bridges",
      coauthors: "Pavel Novak", ball: "coauthors", important: 3, urgent: 2, interesting: 2, next: "Pavel reads the draft; then submit.", ago: -9,
      needsCheck: true, checkNote: "Did Pavel confirm where to submit?" }),
    P({ acr: "LETTERS", group: "other", stage: "submitted", progress: 75, title: "Letters of a Merchant Family, 1820–1870",
      coauthors: "Maria Costa", ball: "journal", tags: ["Grant B"], important: 3, urgent: 1, interesting: 4, next: "Wait for the reviews.", ago: -25 }),
    P({ acr: "DIALECT", group: "other", stage: "drafting", progress: 45, title: "How Village Dialects Change Over a Generation",
      coauthors: "Maria Costa, Jon Ellis", ball: "me", priority: "high", important: 4, urgent: 5, interesting: 3,
      next: "Finish the abstract for the conference deadline.", due: day(5), dueWhat: "Conference abstract", ago: -3 }),
    P({ acr: "CYCLING", group: "other", stage: "idea", progress: 5, title: "Why People Cycle to Work",
      ball: "me", priority: "low", important: 1, urgent: 0, interesting: 4, next: "Look for a city that counts cyclists.", ago: -50 }),
    P({ acr: "TOOLKIT", group: "other", stage: "analysis", progress: 40, title: "An Open Toolkit for Field Notes",
      coauthors: "Tomas Berg", ball: "me", important: 2, urgent: 1, interesting: 4, paused: true,
      next: "Paused until the BEES revision is out.", codeLoc: "GitHub: example/field-notes", ago: -35 }),
    P({ acr: "MUSEUM", group: "published", stage: "published", progress: 100, title: "Visitor Flows in Small Museums",
      coauthors: "Maria Costa", journal: "Heritage & Society Review", year: 2025, biblio: "12 (2), 101–130", ago: -200 }),
    P({ acr: "SOLAR", group: "published", stage: "accepted", progress: 95, title: "Cheap Protective Coatings for Solar Panels",
      coauthors: "Anna Reyes", journal: "Applied Materials Notes", year: new Date().getFullYear() + 1, ball: "journal", next: "Check the proofs.", ago: -14 }),
    P({ acr: "TEAMS", group: "published", stage: "published", progress: 100, title: "How Remote Teams Share Knowledge",
      coauthors: "Jon Ellis, Lina Okafor", journal: "Work & Organisation Review", year: 2023, biblio: "8 (1), 1–24", ago: -400 }),
  ];

  // Diary: weekdays of the last five weeks. A line starting with a project's acronym links to that project.
  const lines = [
    ["BEES: reviewer answers, new counts", "COAST: photo calibration"],
    ["DIALECT: abstract", "admin, emails"],
    ["MEMORY: call with Lina and Pavel", "BEES: updated figures"],
    ["COAST: methods section", "teaching"],
    ["BRIDGE: comments for Pavel", "DIALECT: interview notes", "seminar"],
    ["BEES: response letter", "admin"],
    ["READING: data access request", "COAST: literature"],
    ["DIALECT: maps", "MEMORY: first results"],
  ];
  const notes = { [-8]: "conference", [-19]: "holiday" };
  const diary = [];
  for (let n = -35, i = 0; n <= 0; n++) {
    const d = day(n), wd = new Date(d + "T12:00:00").getDay();
    if (wd === 0 || wd === 6) continue;
    if (notes[n]) { diary.push({ d, note: notes[n], text: "", updated: at(n, 18) }); continue; }
    diary.push({ d, note: "", text: lines[i++ % lines.length].join("\n"), updated: at(n, n === 0 ? 8 : 18) });
  }
  const settings = { groups: [
    { id: "lab", label: "Own projects" },
    { id: "collab", label: "Collaborations" },
    { id: "other", label: "Side projects" },
    { id: "published", label: "Published & forthcoming" },
  ] };
  return { format: "research-pipeline/1", savedAt: new Date().toISOString(), settings, projects, diary };
};

// Simple in-memory + localStorage analytics tracker for the portfolio

const STORAGE_KEY = "jw_portfolio_analytics";

function loadData() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

export const analytics = {
  /** Call once on page load */
  trackPageView() {
    const data = loadData();
    data.pageViews = (data.pageViews || 0) + 1;
    data.lastVisit = new Date().toISOString();
    data.visits = data.visits || [];
    data.visits.push({ timestamp: data.lastVisit, referrer: document.referrer || "direct" });
    // keep only last 100 visits
    if (data.visits.length > 100) data.visits = data.visits.slice(-100);
    saveData(data);
  },

  /** Call when a project link is clicked */
  trackProjectClick(projectTitle) {
    const data = loadData();
    data.projectClicks = data.projectClicks || {};
    data.projectClicks[projectTitle] = (data.projectClicks[projectTitle] || 0) + 1;
    saveData(data);
  },

  /** Get full stats object */
  getStats() {
    return loadData();
  },
};
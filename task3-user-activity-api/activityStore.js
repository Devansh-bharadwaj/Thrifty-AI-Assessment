const activities = [];

function logActivity(userId, action) {
  const activity = {
    userId,
    action,
    timestamp: new Date().toISOString(),
  };
  activities.push(activity);
  return activity;
}

function getLastActivities(userId, limit = 10) {
  return activities
    .filter((act) => act.userId === userId)
    .slice(-limit)
    .reverse();
}

function getActivitySummary(userId) {
  const userActs = activities.filter((act) => act.userId === userId);
  const summary = {};

  userActs.forEach((act) => {
    summary[act.action] = (summary[act.action] || 0) + 1;
  });

  return summary;
}

module.exports = {
  logActivity,
  getLastActivities,
  getActivitySummary,
};

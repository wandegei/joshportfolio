import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Users, MousePointerClick, Eye, TrendingUp, RefreshCw, ArrowLeft } from "lucide-react";
import { analytics } from "@/lib/analytics";

const COLORS = ["#3b82f6", "#10b981", "#a855f7", "#f59e0b", "#ef4444"];

function StatCard({ icon: Icon, label, value, color = "text-primary" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-pane rounded-sm p-6 flex items-center gap-5"
    >
      <div className={`w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 ${color.replace("text-", "bg-").replace("primary", "primary/10")}`}>
        <Icon size={20} className={color} />
      </div>
      <div>
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">{label}</p>
        <p className="text-3xl font-black text-foreground">{value}</p>
      </div>
    </motion.div>
  );
}

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  const load = () => setStats(analytics.getStats());

  useEffect(() => { load(); }, []);

  if (!stats) return null;

  const projectData = Object.entries(stats.projectClicks || {}).map(([name, clicks]) => ({ name, clicks }));
  const totalClicks = projectData.reduce((s, p) => s + p.clicks, 0);

  const recentVisits = (stats.visits || []).slice(-10).reverse();

  return (
    <div className="min-h-screen bg-background text-foreground font-inter p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="w-9 h-9 rounded-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
            >
              <ArrowLeft size={16} />
            </a>
            <div>
              <h1 className="text-2xl font-black text-foreground">Analytics Dashboard</h1>
              <p className="font-mono text-xs text-muted-foreground mt-0.5">Portfolio visitor & click tracking</p>
            </div>
          </div>
          <button
            onClick={load}
            className="flex items-center gap-2 px-4 py-2 border border-border/50 rounded-sm text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
          >
            <RefreshCw size={13} /> Refresh
          </button>
        </div>

        {/* Stat cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <StatCard icon={Eye} label="Total Page Views" value={stats.pageViews || 0} color="text-primary" />
          <StatCard icon={MousePointerClick} label="Project Clicks" value={totalClicks} color="text-accent" />
          <StatCard icon={Users} label="Unique Sessions" value={(stats.visits || []).length} color="text-purple-400" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Project clicks chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-pane rounded-sm p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp size={16} className="text-primary" />
              <h2 className="font-semibold text-foreground">Project Clicks</h2>
            </div>
            {projectData.length === 0 ? (
              <p className="text-muted-foreground text-sm text-center py-10">No project clicks yet. Visit your portfolio and click a project link.</p>
            ) : (
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={projectData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#71717a" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "#71717a" }} axisLine={false} tickLine={false} allowDecimals={false} />
                  <Tooltip
                    contentStyle={{ background: "#09090b", border: "1px solid #27272a", borderRadius: 4, fontSize: 12 }}
                    cursor={{ fill: "rgba(59,130,246,0.05)" }}
                  />
                  <Bar dataKey="clicks" radius={[3, 3, 0, 0]}>
                    {projectData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </motion.div>

          {/* Recent visits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="glass-pane rounded-sm p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <Users size={16} className="text-accent" />
              <h2 className="font-semibold text-foreground">Recent Visits</h2>
            </div>
            {recentVisits.length === 0 ? (
              <p className="text-muted-foreground text-sm text-center py-10">No visits recorded yet.</p>
            ) : (
              <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                {recentVisits.map((v, i) => (
                  <div key={i} className="flex items-center justify-between text-xs py-2 border-b border-border/20 last:border-0">
                    <span className="text-muted-foreground font-mono">
                      {new Date(v.timestamp).toLocaleString()}
                    </span>
                    <span className="text-foreground/60 truncate max-w-[140px]">
                      {v.referrer === "direct" ? "Direct" : v.referrer}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Last visit */}
        {stats.lastVisit && (
          <p className="mt-6 font-mono text-xs text-muted-foreground text-center">
            Last visit: {new Date(stats.lastVisit).toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
}
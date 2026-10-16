
"use client";

import { useState } from "react";
import { login } from "../../api/auth";
import "./admin.css";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("admin@lightspeedweb.ca");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      window.location.href = "/admin/dashboard";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="admin-login-page">
      <form className="admin-login-card" onSubmit={handleSubmit}>
        <div className="admin-brand">
          <span className="admin-brand-icon">LS</span>
          <div>
            <div className="admin-brand-name">LIGHT SPEED WEB</div>
            <small>CONTENT MANAGEMENT SYSTEM</small>
          </div>
        </div>

        <div className="admin-login-heading">
          <span>ADMIN PORTAL</span>
          <h1>Welcome back.</h1>
          <p>Sign in to manage your website content.</p>
        </div>

        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        {error && <p className="admin-login-error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
          <span>→</span>
        </button>

        <footer>© 2026 Light Speed Web. All rights reserved.</footer>
      </form>
    </main>
  );
}

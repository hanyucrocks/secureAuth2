"use client"

import dynamic from "next/dynamic";
import { useState } from "react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { TopBar } from "@/components/dashboard/topbar";

const SendMoneyCard = dynamic(() => import("@/components/dashboard/send-money-card").then(m => m.SendMoneyCard), { ssr: false });
const TransactionFeed = dynamic(() => import("@/components/dashboard/transaction-feed").then(m => m.TransactionFeed), { ssr: false });
const AnomalyAlert = dynamic(() => import("@/components/dashboard/anomaly-alert").then(m => m.AnomalyAlert), { ssr: false });
const MapVisualization = dynamic(() => import("@/components/dashboard/map-visualization").then(m => m.MapVisualization), { ssr: false });
const AuthActivity = dynamic(() => import("@/components/dashboard/auth-activity").then(m => m.AuthActivity), { ssr: false });
const SpendingGraph = dynamic(() => import("@/components/dashboard/spending-graph").then(m => m.SpendingGraph), { ssr: false });
const SessionInfo = dynamic(() => import("@/components/SessionInfo").then(m => m.SessionInfo), { ssr: false });

export default function DashboardPage() {
  const [showAnomalyAlert, setShowAnomalyAlert] = useState(true)

  return (
    <ProtectedRoute>
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Bar (includes mobile sidebar) */}
        <TopBar />

        {/* Dashboard Grid */}
        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-[1600px] mx-auto">
            {/* Section A: Send Money Simulation */}
            <div className="md:col-span-1">
              <SendMoneyCard />
            </div>

            {/* Section B: Transaction Feed */}
            <div className="md:col-span-1">
              <TransactionFeed />
            </div>

            {/* Section C: Anomaly Alert */}
            {showAnomalyAlert && (
              <div className="md:col-span-2 xl:col-span-1">
                <AnomalyAlert onDismiss={() => setShowAnomalyAlert(false)} />
              </div>
            )}

            {/* Section D: Map Visualization */}
            <div className={`md:col-span-2 ${!showAnomalyAlert ? "xl:col-span-2" : "xl:col-span-1"}`}>
              <MapVisualization />
            </div>

            {/* Section E: Auth Activity */}
            <div className="md:col-span-1">
              <AuthActivity />
            </div>

            {/* Section F: Spending Graph */}
            <div className="md:col-span-1">
              <SpendingGraph />
            </div>

            {/* Section G: Session Information */}
            <div className="md:col-span-1">
              <SessionInfo />
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}

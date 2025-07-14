import { TransactionFeed } from "@/components/dashboard/transaction-feed";

export default function TransactionsPage() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Transactions</h1>
      <TransactionFeed />
    </div>
  );
} 
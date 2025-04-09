import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect('/login');
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bienvenido al dashboard</h1>
      <p>Tu sesión está activa.</p>
    </main>
  );
}

'use client';

import { merge } from '../lib/merge';

export default function Home() {
  const collection1 = [1, 4, 7];
  const collection2 = [9, 5, 2]; // descending
  const collection3 = [3, 6, 8];

  const result = merge(collection1, collection2, collection3);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl w-full">
        <h1 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
          Merge Three Sorted Arrays
        </h1>

        <div className="space-y-3 text-gray-700">
          <ArrayDisplay label="collection1" data={collection1} color="text-blue-600" />
          <ArrayDisplay label="collection2" data={collection2} color="text-pink-600" />
          <ArrayDisplay label="collection3" data={collection3} color="text-green-600" />
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="text-gray-800 text-lg">
          <p className="mb-1 font-medium">✅ Merged Result:</p>
          <p className="bg-gray-100 p-3 rounded-lg font-mono text-indigo-800">
            {JSON.stringify(result)}
          </p>
        </div>
      </div>
    </main>
  );
}

function ArrayDisplay({
  label,
  data,
  color,
}: {
  label: string;
  data: number[];
  color?: string;
}) {
  return (
    <p className={`font-mono ${color}`}>
      <strong>{label}:</strong> {JSON.stringify(data)}
    </p>
  );
}

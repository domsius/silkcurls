import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontaktai',
  description: 'Sužinokite daugiau apie mūsų įmonę ir misiją.',
};

export default function KontaktaiPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Kontaktai</h1>
      <p className="mb-4">
        Čia galite įdėti informaciją apie jūsų įmonę, jos istoriją, misiją ir vertybes.
      </p>
    </div>
  );
}
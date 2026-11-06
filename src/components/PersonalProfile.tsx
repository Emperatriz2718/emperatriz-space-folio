import { BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PersonalProfile() {
  return (
    <section aria-labelledby="personal-profile-title" className="personal-profile w-full max-w-4xl mx-auto px-6 py-12 rounded-3xl border text-foreground mb-20">
      <h2 id="personal-profile-title" className="text-3xl md:text-4xl font-bold text-center">Personal Profile</h2>
      <p className="profile-label text-center mt-2">About</p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="profile-panel space-y-4 p-6 rounded-2xl border">
          <p><span className="profile-label font-semibold">Full Name:</span><br />Emperatriz Morales</p>
          <p><span className="profile-label font-semibold">Date of Birth:</span><br />November 18, 1999</p>
          <p><span className="profile-label font-semibold">Place of Birth:</span><br />United Arab Emirates</p>
          <p><span className="profile-label font-semibold">Marital Status:</span><br />Single / Soltera</p>
        </div>
        <div className="profile-panel space-y-4 p-6 rounded-2xl border">
          <p className="profile-label font-semibold">Languages</p>
          <p><span className="font-medium">Native:</span> Arabic</p>
          <p><span className="font-medium">Other languages:</span> English, Italian, Spanish, Sanskrit</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Button asChild size="lg" className="profile-facebook rounded-full px-6 font-semibold text-primary-foreground">
          <a href="https://www.facebook.com/share/19ckpqLRcz/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Cuenta Oficial Verificada - Emperatriz Morales ✅">
            <BadgeCheck size={20} /> Facebook Verified
          </a>
        </Button>
        <Button asChild size="lg" className="profile-instagram rounded-full px-6 font-semibold text-primary-foreground">
          <a href="https://www.instagram.com/emperatriz_1827/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </Button>
      </div>
    </section>
  );
}
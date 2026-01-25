import { ButtonLink } from '@/components/Button';
import { Container } from '@/components/Container';

export default function NotFound() {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-xl rounded-2xl border border-white/5 bg-white/5 p-8 text-center shadow-soft">
        <h1 className="font-display text-3xl text-forest-100">Page not found</h1>
        <p className="mt-3 text-sm leading-relaxed text-forest-100/70">
          The page you’re looking for doesn’t exist. Explore Yakra Organics products or contact us for
          an inquiry.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/organics">View products</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
}

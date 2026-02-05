'use client';

import { useMemo, useState } from 'react';

import type { BuyingOption } from '@/data/products';
import { formatLkr } from '@/lib/format';
import { getWhatsAppUrl } from '@/data/whatsapp';

import { Button } from './Button';
import { cn } from '@/lib/cn';

type BuyingOptionSelectorProps = {
  productName: string;
  buyingOptions: BuyingOption[];
  defaultOptionId?: string;
};

export function BuyingOptionSelector({
  productName,
  buyingOptions,
  defaultOptionId
}: BuyingOptionSelectorProps) {
  const defaultOption = useMemo(() => {
    if (defaultOptionId) {
      return buyingOptions.find((opt) => opt.id === defaultOptionId) || buyingOptions[0];
    }

    return buyingOptions.find((opt) => opt.isMostPopular) || buyingOptions[0];
  }, [buyingOptions, defaultOptionId]);

  const [selectedOptionId, setSelectedOptionId] = useState(defaultOption.id);
  const [error, setError] = useState('');

  const selectedOption = useMemo(() => {
    return buyingOptions.find((o) => o.id === selectedOptionId) || defaultOption;
  }, [buyingOptions, defaultOption, selectedOptionId]);

  function onOrder() {
    if (!selectedOptionId) {
      setError('Please select an option before ordering');
      return;
    }

    const url = typeof window !== 'undefined' ? window.location.href : '';

    const message = `I'd like to order the ${selectedOption.label} option of ${productName}.
Product: ${url}`;

    window.open(getWhatsAppUrl(message), '_blank', 'noreferrer');
  }

  return (
    <div className="mt-6 rounded-2xl border border-white/5 bg-white/5 p-5 shadow-soft sm:p-6">
      <div>
        <label htmlFor="buying-option" className="text-xs font-medium text-forest-100/70">
          Choose an option
        </label>
        <select
          id="buying-option"
          value={selectedOptionId}
          onChange={(e) => {
            setSelectedOptionId(e.target.value);
            setError('');
          }}
          className="mt-2 w-full rounded-md border border-white/10 bg-forest-950/60 px-3 py-2.5 text-sm text-forest-100 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
        >
          {buyingOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>

        <div className="mt-3 grid gap-2">
          {buyingOptions.map((option) => (
            <div key={option.id} className="flex items-start justify-between gap-4 text-xs">
              <div>
                <div className="flex items-center gap-2">
                  <span className={cn('text-forest-100/80', option.id === selectedOptionId && 'text-forest-100')}>
                    {option.label}
                  </span>
                  {option.isMostPopular ? (
                    <span className="rounded-full bg-accent-500/10 px-2 py-0.5 text-[10px] font-medium tracking-wide text-accent-500 ring-1 ring-accent-500/20">
                      Most Popular
                    </span>
                  ) : null}
                </div>
                <div className="mt-0.5 text-forest-100/55">{option.bestFor}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="text-lg font-medium text-forest-100 transition">
          {formatLkr(selectedOption.price)}
        </div>
        <div className="mt-1 text-xs text-forest-100/60">{selectedOption.priceSubtext}</div>
      </div>

      {error && (
        <div className="mt-4 rounded-md bg-red-500/10 p-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <div className="mt-5">
        <Button
          type="button"
          onClick={onOrder}
          className="w-full py-3 text-base"
          disabled={!selectedOptionId}
        >
          Order via WhatsApp
        </Button>
      </div>
    </div>
  );
}

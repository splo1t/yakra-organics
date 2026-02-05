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
  maxStock?: number;
};

function formatLkrValue(priceLkr: number) {
  return new Intl.NumberFormat('en-LK', { maximumFractionDigits: 0 }).format(priceLkr);
}

export function BuyingOptionSelector({
  productName,
  buyingOptions,
  defaultOptionId,
  maxStock = 99
}: BuyingOptionSelectorProps) {
  const defaultOption = useMemo(() => {
    if (defaultOptionId) {
      return buyingOptions.find((opt) => opt.id === defaultOptionId) || buyingOptions[0];
    }

    return buyingOptions.find((opt) => opt.isMostPopular) || buyingOptions[0];
  }, [buyingOptions, defaultOptionId]);

  const [selectedOptionId, setSelectedOptionId] = useState(defaultOption.id);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');

  const selectedOption = useMemo(() => {
    return buyingOptions.find((o) => o.id === selectedOptionId) || defaultOption;
  }, [buyingOptions, defaultOption, selectedOptionId]);

  const totalPrice = selectedOption.price * quantity;

  function handleQuantityChange(value: string) {
    const numValue = parseInt(value, 10);

    if (isNaN(numValue)) {
      setQuantity(1);
      return;
    }

    if (numValue <= 0) {
      setQuantity(1);
    } else if (numValue > maxStock) {
      setQuantity(maxStock);
    } else {
      setQuantity(numValue);
    }

    setError('');
  }

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setError('');
    }
  }

  function handleIncrement() {
    if (quantity < maxStock) {
      setQuantity(quantity + 1);
      setError('');
    }
  }

  function onOrder() {
    if (!selectedOptionId) {
      setError('Please select an option before ordering');
      return;
    }

    if (quantity < 1) {
      setError('Invalid quantity');
      return;
    }

    const url = typeof window !== 'undefined' ? window.location.href : '';

    const message = `I'd like to order ${quantity}x ${selectedOption.label} of ${productName}.\nProduct: ${url}`;

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
        <label className="text-xs font-medium text-forest-100/70">Quantity</label>
        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            onClick={handleDecrement}
            disabled={quantity <= 1}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-forest-950/60 text-forest-100 transition disabled:cursor-not-allowed disabled:opacity-50 hover:bg-forest-800/50 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
            aria-label="Decrease quantity"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
            </svg>
          </button>
          <input
            type="number"
            min="1"
            max={maxStock}
            value={quantity}
            onChange={(e) => handleQuantityChange(e.target.value)}
            className="w-20 rounded-md border border-white/10 bg-forest-950/60 px-3 py-2 text-center text-sm text-forest-100 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
            aria-label="Quantity"
          />
          <button
            type="button"
            onClick={handleIncrement}
            disabled={quantity >= maxStock}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-forest-950/60 text-forest-100 transition disabled:cursor-not-allowed disabled:opacity-50 hover:bg-forest-800/50 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
            aria-label="Increase quantity"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
        <p className="mt-1 text-xs text-forest-100/50">Max {maxStock} items</p>
      </div>

      <div className="mt-6">
        <div className="flex items-baseline gap-1">
          <div className="text-lg font-medium text-forest-100 transition">
            {formatLkr(selectedOption.price)}
          </div>
          <div className="text-sm text-forest-100/60">each</div>
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-xs text-forest-100/50">Total:</span>
          <span className="text-lg font-semibold text-forest-100">
            {formatLkr(totalPrice)}
          </span>
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

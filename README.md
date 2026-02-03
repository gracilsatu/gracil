# PPOB + Topup Platform (Opsi 2)

Struktur awal monorepo untuk:

- **Frontend**: Next.js (etalase & checkout tamu).
- **Backend**: Fastify (API transaksi, webhook pembayaran, integrasi provider).
- **Bot WA**: Node.js service terpisah untuk notifikasi.

## Struktur Folder

```
backend/   # API Fastify
frontend/  # Next.js UI
bot-wa/    # Bot WhatsApp service
```

## Jalankan Lokal

```bash
npm install
npm run dev:backend
npm run dev:frontend
npm run dev:bot
```

## Next Steps

- Tambah adapter Qiospay/Tokovoucher.
- Tambah modul pembayaran (manual + iPaymu callback).
- Implement dashboard admin (import produk & transaksi).

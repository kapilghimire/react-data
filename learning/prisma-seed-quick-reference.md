# Prisma Seed Quick Reference

This note is for when you need to remember how seeding works in this workspace.

## Current workspace setup

- Prisma config: `prisma7.config.ts`
- Schema: `prisma/schema.prisma`
- Seed script: `app/lib/prisma/seed.ts`
- Database file: `dev.db`
- Seed command: `tsx ./app/lib/prisma/seed.ts`

## Common commands

```bash
npx prisma generate
npx prisma migrate dev
npx prisma db seed
```

Use this full flow when you want to rebuild the schema and load seed data:

```bash
npx prisma generate && npx prisma migrate dev && npx prisma db seed
```

## Clean and reload

If you want to wipe the local database and load the seed data again, use:

```bash
npx prisma migrate reset
```

This removes the current data, reapplies the migrations, and runs the seed step again.

If you want to be more explicit, you can do the full reset flow manually:

```bash
npx prisma migrate reset
npx prisma db seed
```

In this workspace, `migrate reset` is usually the easiest way to clean and reload everything.

## When to use each command

- `npx prisma generate` regenerates the Prisma client after schema changes.
- `npx prisma migrate dev` applies schema changes to the local database.
- `npx prisma db seed` runs the seed script and loads data from `db.json`.
- `npx prisma migrate deploy` applies existing migrations in a deploy or reset workflow.
- `npx prisma migrate reset` wipes the local database, reapplies migrations, and reloads seed data.

## Important details

- The seed script imports Prisma from `app/generated/prisma/client.js`.
- The seed script connects to the root `dev.db` file, not `prisma/dev.db`.
- If seed fails because tables do not exist, run the migration command first.

## Quick reminder

If you only want to reload data, run:

```bash
npx prisma db seed
```

If you changed the schema, run:

```bash
npx prisma generate
npx prisma migrate dev
npx prisma db seed
```

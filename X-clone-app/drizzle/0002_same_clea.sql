ALTER TABLE "posts" ALTER COLUMN "like" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "image" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "avatarUrl" text;--> statement-breakpoint
ALTER TABLE "posts" DROP COLUMN "imageUrl";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "avatorUrl";
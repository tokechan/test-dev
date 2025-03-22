DROP INDEX "Post_name_idx";--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "content" text NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "handle" text NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "like" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "imageUrl" text;--> statement-breakpoint
CREATE INDEX "Post_userId_idx" ON "posts" USING btree ("handle");--> statement-breakpoint
ALTER TABLE "posts" DROP COLUMN "name";
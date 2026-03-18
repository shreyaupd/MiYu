import{
    pgTable,
    text,
    uuid,
    timestamp,
    jsonb,
    boolean,
    pgEnum,
    
} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";

export const subscriptionTierEnum = pgEnum("subscription_tier",["free","pro"]);
export const matchStatusEnum = pgEnum("match_status",["pending","accepted","rejected","cancelled"]);

//User table
export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  clerkId: text("clerk_id").notNull().unique(),
  email: text("email").notNull(),
  name: text("name").notNull(),
  imageUrl: text("image_url"),
  subscriptionTier: subscriptionTierEnum("subscription_tier").default('free').notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Communities table
export const communities = pgTable("communities", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  imageUrl: text("image_url"),
  createdById: uuid("created_by_id").references(() => users.id, { onDelete: 'set null' }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

//Community Members table
export const communityMembers = pgTable("community_members",{
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id, { onDelete: 'cascade' }).notNull(),
  communityId: uuid("community_id").references(() => communities.id, { onDelete: 'cascade' }).notNull(),
  joinedAt: timestamp("joined_at").defaultNow().notNull(),
});

// Learning Goals table
export const learningGoals = pgTable("learning_goals", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id, { onDelete: 'cascade' }).notNull(),
  communityId: uuid("community_id").references(() => communities.id, { onDelete: 'cascade' }).notNull(),
  title: text("title").notNull(),
  description: text("description"),
  tags: jsonb("tags").$type<string[]>().default([]),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Matches table
export const matches = pgTable("matches", {
  id: uuid("id").defaultRandom().primaryKey(),
  user1Id: uuid("user1_id").references(() => users.id, { onDelete: 'cascade' }).notNull(),
  user2Id: uuid("user2_id").references(() => users.id, { onDelete: 'cascade' }).notNull(),
  communityId: uuid("community_id").references(() => communities.id, { onDelete: 'cascade' }).notNull(),
  status: matchStatusEnum("status").default('pending').notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Conversations table
export const conversations = pgTable("conversations", {
  id: uuid("id").defaultRandom().primaryKey(),
  matchId: uuid("match_id").references(() => matches.id, { onDelete: 'cascade' }).notNull().unique(),
  lastMessageAt: timestamp("last_message_at").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Messages table
export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  conversationId: uuid("conversation_id").references(() => conversations.id, { onDelete: 'cascade' }).notNull(),
  senderId: uuid("sender_id").references(() => users.id, { onDelete: 'cascade' }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const conversationSummaries = pgTable("conversation_summaries", {
  id: uuid("id").defaultRandom().primaryKey(),
  conversationId: uuid("conversation_id").references(() => conversations.id, { onDelete: 'cascade' }).notNull().unique(),
  summary: text("summary").notNull(),
  actionItems: jsonb("action_items").$type<string[]>().default([]).notNull(),
  keyTopics: jsonb("key_topics").$type<string[]>().default([]).notNull(),
  nextSteps: jsonb("next_steps").$type<string[]>().default([]).notNull(),
  generatedAt: timestamp("generated_at").defaultNow().notNull(),
});

// RELATIONS

// Users relations
export const usersRelations = relations(users, ({ many }) => ({
  createdCommunities: many(communities), // Communities created
  communityMemberships: many(communityMembers), // Communities joined
  learningGoals: many(learningGoals), // User goals
  matchesAsUser1: many(matches, { relationName: "user1" }), // As first user
  matchesAsUser2: many(matches, { relationName: "user2" }), // As second user
  sentMessages: many(messages), // Messages sent
}));

// Communities relations
export const communitiesRelations = relations(communities, ({ one, many }) => ({
  createdBy: one(users, { // Created by
    fields: [communities.createdById],
    references: [users.id],
  }),
  members: many(communityMembers), // Community members
  learningGoals: many(learningGoals), // Community goals
  matches: many(matches), // Community matches
}));

// Community Members relations
export const communityMembersRelations = relations(communityMembers, ({ one }) => ({
  user: one(users, { // Member user
    fields: [communityMembers.userId],
    references: [users.id],
  }),
  community: one(communities, { // Member community
    fields: [communityMembers.communityId],
    references: [communities.id],
  }),
}));

// Learning Goals relations
export const learningGoalsRelations = relations(learningGoals, ({ one }) => ({
  user: one(users, { // Goal owner
    fields: [learningGoals.userId],
    references: [users.id],
  }),
  community: one(communities, { // Goal community
    fields: [learningGoals.communityId],
    references: [communities.id],
  }),
}));

// Matches relations
export const matchesRelations = relations(matches, ({ one }) => ({
  user1: one(users, { // First participant
    fields: [matches.user1Id],
    references: [users.id],
    relationName: "user1"
  }),
  user2: one(users, { // Second participant
    fields: [matches.user2Id],
    references: [users.id],
    relationName: "user2"
  }),
  community: one(communities, { // Match community
    fields: [matches.communityId],
    references: [communities.id],
  }),
  conversation: one(conversations), // Associated chat
}));

// Conversations relations
export const conversationsRelations = relations(conversations, ({ one, many }) => ({
  match: one(matches, { // Parent match
    fields: [conversations.matchId],
    references: [matches.id],
  }),
  messages: many(messages), // Chat messages
  summary: one(conversationSummaries), // AI summary
}));

// Messages relations
export const messagesRelations = relations(messages, ({ one }) => ({
  conversation: one(conversations, { // Parent conversation
    fields: [messages.conversationId],
    references: [conversations.id],
  }),
  sender: one(users, { // Message author
    fields: [messages.senderId],
    references: [users.id],
  }),
}));

// Conversation Summaries relations
export const conversationSummariesRelations = relations(conversationSummaries, ({ one }) => ({
  conversation: one(conversations, { // Summarized conversation
    fields: [conversationSummaries.conversationId],
    references: [conversations.id],
  }),
}));
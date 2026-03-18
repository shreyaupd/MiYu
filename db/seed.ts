import db from "./index";
import {
  users,
  communities,
  communityMembers,
  learningGoals,
  matches,
  conversations,
  messages,
  conversationSummaries,
} from "./schema";

async function main() {
  console.log("Seeding database...");

  // clear existing data if needed, or just insert new data.
  // Note: if you want to clear the database first, you might need to run delete operations here.
  
  // We'll insert mock users.
  const [user1] = await db.insert(users).values({
    clerkId: "user_2a1b3c4d5e6f7g8h9i0j",
    email: "alice@example.com",
    name: "Alice Smith",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
    subscriptionTier: "free",
  }).returning();

  const [user2] = await db.insert(users).values({
    clerkId: "user_9j8h7g6f5e4d3c2b1a0",
    email: "bob@example.com",
    name: "Bob Jones",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
    subscriptionTier: "pro",
  }).returning();

  const [user3] = await db.insert(users).values({
    clerkId: "user_x1y2z3a4b5c6d7e8f9",
    email: "charlie@example.com",
    name: "Charlie Brown",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie",
    subscriptionTier: "free",
  }).returning();

  // Insert mock communities

  const [community1] = await db.insert(communities).values({
    name: "Frontend Developers",
    description: "A community for frontend devs to share knowledge.",
    createdById: user1.id,
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
  }).returning();

  const [community2] = await db.insert(communities).values({
    name: "Machine Learning Enthusiasts",
    description: "Discussing the latest in AI and ML.",
    createdById: user2.id,
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
  }).returning();

  // Insert community members
  await db.insert(communityMembers).values([
    { userId: user1.id, communityId: community1.id },
    { userId: user2.id, communityId: community1.id },
    { userId: user3.id, communityId: community1.id },
    { userId: user2.id, communityId: community2.id },
    { userId: user3.id, communityId: community2.id },
  ]);

  // Insert learning goals
  await db.insert(learningGoals).values([
    {
      userId: user1.id,
      communityId: community1.id,
      title: "Master React Context",
      description: "Understand and implement advanced React patterns using context.",
      tags: ["React", "State Management", "Frontend"],
    },
    {
      userId: user2.id,
      communityId: community2.id,
      title: "Learn PyTorch Basics",
      description: "Build a simple neural network from scratch using PyTorch.",
      tags: ["Python", "PyTorch", "AI"],
    },
    {
      userId: user3.id,
      communityId: community1.id,
      title: "CSS Grid Expert",
      description: "Create complex layouts confidently using CSS Grid.",
      tags: ["CSS", "Layout", "Frontend"],
    }
  ]);

  // Insert matches
  const [match1] = await db.insert(matches).values({
    user1Id: user1.id,
    user2Id: user2.id,
    communityId: community1.id,
    status: "accepted",
  }).returning();

  const [match2] = await db.insert(matches).values({
    user1Id: user2.id,
    user2Id: user3.id,
    communityId: community2.id,
    status: "pending",
  }).returning();

  // Insert conversations
  const [conversation1] = await db.insert(conversations).values({
    matchId: match1.id,
  }).returning();

  // Insert messages
  await db.insert(messages).values([
    {
      conversationId: conversation1.id,
      senderId: user1.id,
      content: "Hi Bob! I saw you are also learning React.",
    },
    {
      conversationId: conversation1.id,
      senderId: user2.id,
      content: "Hey Alice, yes I am! Exploring Context API right now.",
    },
  ]);

  // Insert conversation summaries
  await db.insert(conversationSummaries).values({
    conversationId: conversation1.id,
    summary: "Alice and Bob introduced themselves and discussed learning React Context API.",
    actionItems: ["Share a good tutorial link", "Schedule a pair programming session"],
    keyTopics: ["React", "Context API", "Introductions"],
    nextSteps: ["Alice: Send tutorial link", "Bob: Try building a small sample app"],
  });

  console.log("Database seeded successfully!");
  process.exit(0);
}

main().catch((e) => {
  console.error("Seeding failed:");
  console.error(e);
  process.exit(1);
});

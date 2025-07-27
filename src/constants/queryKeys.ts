export const queryKeys = {
  user: {
    details: (userId: string) => ['user', 'details', userId],
    list: () => ['user', 'list'],
  },
  posts: {
    list: () => ['posts', 'list'],
    details: (postId: string) => ['posts', 'details', postId],
  },
  comments: {
    list: (postId: string) => ['comments', 'list', postId],
    details: (commentId: string) => ['comments', 'details', commentId],
  },
  settings: {
    general: () => ['settings', 'general'],
    privacy: () => ['settings', 'privacy'],
    notifications: () => ['settings', 'notifications'],
  },
} as const;

export const TodoStatus = {
  ANY: 'ANY',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
} as const;

export const filterOptions = [
  { value: TodoStatus.ANY, label: 'All' },
  { value: TodoStatus.ACTIVE, label: 'Active' },
  { value: TodoStatus.COMPLETED, label: 'Completed' },
];

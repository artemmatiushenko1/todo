import { useRef } from 'react';

type UseDndProps<T extends object> = {
  getItems: () => T[];
  updateItems: (newItems: T[]) => void;
};

export const useDnd = <T extends object>({
  getItems,
  updateItems,
}: UseDndProps<T>) => {
  const dragItemPosition = useRef<number | null>(null);
  const dragOverPosition = useRef<number | null>(null);

  const removeTodoHighlight = (e: React.DragEvent<HTMLLIElement>) => {
    if (e.target instanceof HTMLLIElement) {
      const todoItem = e.target.closest('.todo');
      if (!todoItem) return;
      todoItem.classList.remove('drop-background');
    }
  };

  const handleDragStart = (position: number) => {
    dragItemPosition.current = position;
  };

  const handleDragOver = (
    e: React.DragEvent<HTMLLIElement>,
    position: number
  ) => {
    e.preventDefault();

    dragOverPosition.current = position;

    if (e.target instanceof HTMLLIElement) {
      const todoItem = e.target.closest('.todo');
      if (!todoItem) return;
      todoItem.classList.add('drop-background');
    }
  };

  const handleDragEnd = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();

    if (dragItemPosition.current === null || dragOverPosition.current === null)
      return;

    const newList = [...getItems()];
    const dragItem = newList[dragItemPosition.current];

    newList[dragItemPosition.current] = newList[dragOverPosition.current];
    newList[dragOverPosition.current] = dragItem;

    updateItems(newList);

    dragItemPosition.current = null;
    dragItemPosition.current = null;
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLIElement>) => {
    removeTodoHighlight(e);
  };

  const handleDrop = (e: React.DragEvent<HTMLLIElement>) => {
    removeTodoHighlight(e);
  };

  return {
    handleDragEnd,
    handleDragLeave,
    handleDragOver,
    handleDragStart,
    handleDrop,
  };
};

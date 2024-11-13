import { useState } from 'react';

type UseDndProps<T extends object> = {
  getItems: () => T[];
  updateItems: (newItems: T[]) => void;
};

export const useDnd = <T extends object>({
  getItems,
  updateItems,
}: UseDndProps<T>) => {
  const [draggableItemIndex, setDraggableItemIndex] = useState<number | null>(
    null
  );
  const [dragOverItemIndex, setDragOverItemIndex] = useState<number | null>(
    null
  );

  const handleUpdateItems = () => {
    if (draggableItemIndex === null || dragOverItemIndex === null) return;

    const newList = [...getItems()];
    const dragItem = newList[draggableItemIndex];

    newList[draggableItemIndex] = newList[dragOverItemIndex];
    newList[dragOverItemIndex] = dragItem;

    updateItems(newList);

    setDragOverItemIndex(null);
    setDraggableItemIndex(null);
  };

  const handleDragStart = (index: number) => {
    setDraggableItemIndex(index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>, index: number) => {
    e.preventDefault();

    setDragOverItemIndex(index);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
    handleUpdateItems();
  };

  const handleDragLeave = () => {
    setDragOverItemIndex(null);
  };

  const handleDrop = () => {
    handleUpdateItems();
  };

  return {
    draggableItemIndex,
    dragOverItemIndex,
    handleDragEnd,
    handleDragLeave,
    handleDragOver,
    handleDragStart,
    handleDrop,
  };
};

import { MediaItem } from "@/types";
import Swal from "sweetalert2";

export default function handleAddToLocalStorage(item: MediaItem) {
  const existingItems: MediaItem[] = JSON.parse(
    localStorage.getItem("favoriteItems") || "[]"
  );

  existingItems.push(item);
  localStorage.setItem("favoriteItems", JSON.stringify(existingItems));

  Swal.fire({
    icon: "success",
    title: `${item.title} is added to your my list`,
    showConfirmButton: false,
    timer: 1500,
    customClass: {
      popup: "small-swal-popup",
    },
  });
}

export function handleRemoveFromLocalStorage(item: MediaItem) {
  const existingItems: MediaItem[] = JSON.parse(
    localStorage.getItem("favoriteItems") || "[]"
  );

  const updatedItems = existingItems.filter(
    (existingItem) =>
      existingItem.id !== item.id || existingItem.type !== item.type
  );

  localStorage.setItem("favoriteItems", JSON.stringify(updatedItems));

  Swal.fire({
    icon: "info",
    title: `${item.title} has been removed from your list`,
    showConfirmButton: false,
    timer: 1500,
    customClass: {
      popup: "small-swal-popup",
    },
  });
}

export function isItemInLocalStorage(id: number, type: string): boolean {
  const existingItems: MediaItem[] = JSON.parse(
    localStorage.getItem("favoriteItems") || "[]"
  );

  return existingItems.some(
    (existingItem) => existingItem.id === id && existingItem.type === type
  );
}

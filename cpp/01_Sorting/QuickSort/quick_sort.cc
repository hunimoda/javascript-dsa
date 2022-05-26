#include <algorithm>

#include "quick_sort.h"

// Sets the pivot in the right position, and returns the index of the pivot
int QuickSortHelper(std::vector<int> &v, const int start,
                       const int end) {
  const int pivot = v[start];
  int swap_index = start;
  for (int i = start + 1; i <= end; i++)
    if (v[i] < pivot) std::swap(v[i], v[++swap_index]);
  std::swap(v[start], v[swap_index]);
  return swap_index;
}

void QuickSort(std::vector<int> &v) {
  QuickSort(v, 0, v.size() - 1);
}

void QuickSort(std::vector<int> &v, const int start, const int end) {
  if (start >= end) return;
  const int pivot_index = QuickSortHelper(v, start, end);
  QuickSort(v, start, pivot_index - 1);
  QuickSort(v, pivot_index + 1, end);
}
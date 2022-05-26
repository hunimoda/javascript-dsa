#include <iostream>

#include "bubble_sort.h"

int main() {
  std::vector<int> nums{8, 4, 6, 2, 3, 9, 1, 0, 5, 7};
  std::cout << "\n==== Before sorting ==================" << std::endl;
  for (const int &num : nums)
    std::cout << num << ' ';
  std::cout << std::endl;

  std::cout << "\n==== After sorting ===================" << std::endl;
  BubbleSort(nums);
  for (const int &num : nums)
    std::cout << num << ' ';
  std::cout << std::endl;
  
  return 0;
}
// ===========================
// 1. HINTS DATA (20 Problems)
// ===========================
const HINTS = {
  "two-sum": [
    "Hint 1: Try every pair of numbers. What is the time complexity?",
    "Hint 2: Can you avoid O(n^2) by using extra space?",
    "Hint 3: Use a hashmap to store seen numbers and indices."
  ],
  "reverse-string": [
    "Hint 1: Reverse the characters in-place.",
    "Hint 2: Use two pointers: one at start, one at end.",
    "Hint 3: Swap characters while moving inward."
  ],
  "valid-parentheses": [
    "Hint 1: Brackets must close in correct order.",
    "Hint 2: Use a stack to keep opening brackets.",
    "Hint 3: Every closing bracket must match the top of the stack."
  ],
  "merge-two-sorted-lists": [
    "Hint 1: Use a dummy node to build the result list.",
    "Hint 2: Compare the heads of both lists.",
    "Hint 3: Append the smaller node and move that pointer."
  ],
  "climbing-stairs": [
    "Hint 1: To reach step n, you come from n-1 or n-2.",
    "Hint 2: This problem forms a Fibonacci-like pattern.",
    "Hint 3: Use DP to avoid repeated calculations."
  ],
  "best-time-to-buy-and-sell-stock": [
    "Hint 1: Track the minimum price seen so far.",
    "Hint 2: Profit = current price - minimum price.",
    "Hint 3: Keep updating maximum profit."
  ],
  "valid-anagram": [
    "Hint 1: Anagrams have same character frequencies.",
    "Hint 2: Use a frequency array or map.",
    "Hint 3: Compare both frequency tables."
  ],
  "binary-search": [
    "Hint 1: Array is sorted — think divide and conquer.",
    "Hint 2: Use left, right, and mid pointers.",
    "Hint 3: If target > mid, search right half."
  ],
  "first-bad-version": [
    "Hint 1: Use binary search on version numbers.",
    "Hint 2: Look for the first TRUE in a FALSE→TRUE change.",
    "Hint 3: Shrink the search space to find first bad version."
  ],
  "roman-to-integer": [
    "Hint 1: Add values normally unless subtractive pattern.",
    "Hint 2: If current < next, subtract.",
    "Hint 3: Otherwise, add."
  ],
  "palindrome-number": [
    "Hint 1: Reverse half of the digits.",
    "Hint 2: Compare reversed half with remaining half.",
    "Hint 3: Avoid converting to string if possible."
  ],
  "plus-one": [
    "Hint 1: Add 1 starting from the last digit.",
    "Hint 2: If digit becomes 10, carry over.",
    "Hint 3: If all digits are 9, output array with 1 at front."
  ],
  "move-zeroes": [
    "Hint 1: Use two pointers for placing non-zero values.",
    "Hint 2: Move non-zero values forward.",
    "Hint 3: Fill remaining positions with zero."
  ],
  "fizz-buzz": [
    "Hint 1: Check divisibility by 3 and 5.",
    "Hint 2: If divisible by both, return 'FizzBuzz'.",
    "Hint 3: Otherwise handle each case separately."
  ],
  "number-of-1-bits": [
    "Hint 1: Count total '1' bits.",
    "Hint 2: Use n & (n - 1) to remove last set bit.",
    "Hint 3: Repeat until n becomes 0."
  ],
  "missing-number": [
    "Hint 1: Sum of numbers 0..n is n(n+1)/2.",
    "Hint 2: Compute expected sum.",
    "Hint 3: Subtract actual sum from expected."
  ],
  "single-number": [
    "Hint 1: Every number appears twice except one.",
    "Hint 2: XOR cancels duplicates.",
    "Hint 3: XOR all numbers to find unique one."
  ],
  "maximum-subarray": [
    "Hint 1: Use Kadane’s algorithm.",
    "Hint 2: Track max ending at current index.",
    "Hint 3: Track global maximum."
  ],
  "length-of-last-word": [
    "Hint 1: Trim trailing spaces.",
    "Hint 2: Count characters until next space.",
    "Hint 3: Words may be separated by multiple spaces."
  ],
  "merge-sorted-array": [
    "Hint 1: Merge from end of the array.",
    "Hint 2: Use pointers i, j, and k.",
    "Hint 3: Place larger element at the back."
  ]
};


// ===========================
// 2. Extract problem slug
// ===========================
function getProblemSlug() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  const index = parts.indexOf("problems");
  return (index !== -1 && parts[index + 1]) ? parts[index + 1] : null;
}


// ===========================
// 3. Create the Hint UI
// ===========================
function createHintUI() {
  const slug = getProblemSlug();
  if (!slug || !HINTS[slug]) return;

  const hints = HINTS[slug];
  let index = 0;

  const container = document.createElement("div");
  container.id = "lc-hint-container";

  const showBtn = document.createElement("button");
  showBtn.id = "lc-show-btn";
  showBtn.innerText = "Show Hint";

  const box = document.createElement("div");
  box.id = "lc-hint-box";
  box.style.display = "none";

  const text = document.createElement("div");
  text.id = "lc-hint-text";
  text.innerText = hints[index];

  const nextBtn = document.createElement("button");
  nextBtn.id = "lc-next-btn";
  nextBtn.innerText = "Next Hint";

  nextBtn.addEventListener("click", () => {
    if (index < hints.length - 1) {
      index++;
      text.innerText = hints[index];
    } else {
      nextBtn.innerText = "No more hints 🙂";
      nextBtn.disabled = true;
    }
  });

  showBtn.addEventListener("click", () => {
    box.style.display = box.style.display === "none" ? "block" : "none";
  });

  box.appendChild(text);
  box.appendChild(nextBtn);
  container.appendChild(showBtn);
  container.appendChild(box);

  document.body.appendChild(container);
}


// ===========================
// 4. Run after load
// ===========================
window.addEventListener("load", () => {
  setTimeout(createHintUI, 1500);
});

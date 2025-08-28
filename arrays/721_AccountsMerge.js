// Title: 721_AccountsMerge
// LeetCode ID:
// Difficulty: Med
// Tags:Array
// Hash Table
// String
// Depth-First Search
// Breadth-First Search
// // Union Find
// Sorting
// Date: 2025-08-24
// Link: https://leetcode.com/problems/accounts-merge/description/?envType=problem-list-v2&envId=sorting
//https://www.youtube.com/watch?v=6st4IxEF-90

var accountsMerge = function (accounts) {
  let graph = new Map();
  let emailToName = new Map();

  for (let acc of accounts) {
    let name = acc[0];
    let emails = acc.slice(1);

    for (let e of emails) {
      if (!graph.has(e)) graph.set(e, new Set());
      emailToName.set(e, name);
    }

    // connect all emails in this account
    for (let i = 1; i < emails.length; i++) {
      graph.get(emails[0]).add(emails[i]);
      graph.get(emails[i]).add(emails[0]);
    }
  }

  let seen = new Set();
  let res = [];

  for (let email of graph.keys()) {
    if (!seen.has(email)) {
      let stack = [email],
        comp = [];
      seen.add(email);

      while (stack.length) {
        let cur = stack.pop();
        comp.push(cur);

        for (let nei of graph.get(cur)) {
          if (!seen.has(nei)) {
            seen.add(nei);
            stack.push(nei);
          }
        }
      }

      comp.sort();
      res.push([emailToName.get(email), ...comp]);
    }
  }

  return res;
};

/*
Nice one Ashwin 👌 You’ve already got the graph + DFS solution.
Now, using Union-Find (Disjoint Set Union, DSU) is just another way to group emails. 
Instead of building edges + DFS, we "union" emails that belong to the same account.

Here’s how it works step by step (in JS):

Union-Find Approach

var accountsMerge = function(accounts) {
    let parent = new Map();

    // Find with path compression
    function find(x) {
        if (parent.get(x) !== x) {
            parent.set(x, find(parent.get(x)));
        }
        return parent.get(x);
    }

    // Union
    function union(x, y) {
        let rootX = find(x), rootY = find(y);
        if (rootX !== rootY) {
            parent.set(rootX, rootY);
        }
    }

    let emailToName = new Map();

    // Step 1: Initialize each email as its own parent
    for (let acc of accounts) {
        let name = acc[0];
        for (let email of acc.slice(1)) {
            if (!parent.has(email)) parent.set(email, email);
            emailToName.set(email, name);
        }
    }

    // Step 2: Union emails in the same account
    for (let acc of accounts) {
        let firstEmail = acc[1];
        for (let email of acc.slice(2)) {
            union(firstEmail, email);
        }
    }

    // Step 3: Group emails by root parent
    let groups = new Map();
    for (let email of parent.keys()) {
        let root = find(email);
        if (!groups.has(root)) groups.set(root, []);
        groups.get(root).push(email);
    }

    // Step 4: Build result
    let res = [];
    for (let [root, emails] of groups) {
        emails.sort();
        res.push([emailToName.get(root), ...emails]);
    }

    return res;
};
✅ Key idea:

Each email is a node.

Union all emails in the same account → they end up having the same root.

Finally, group emails by root → gives you merged accounts.

So the difference from your graph+DFS version:

DFS/BFS → explicitly explores connected emails.

Union-Find → implicitly groups connected emails via parent roots.

👉 Do you want me to also show you a visual trace of Union-Find on a small example like

[["John","a@mail","b@mail"],["John","b@mail","c@mail"],["Mary","d@mail"]]
so you see exactly how the unions happen?

You said:
Yes

ChatGPT said:
Perfect 👍 Let’s trace it on this example:

[
  ["John","a@mail","b@mail"],
  ["John","b@mail","c@mail"],
  ["Mary","d@mail"]
]
Step 1: Initialize parents
Each email is its own parent:


a@mail → a@mail
b@mail → b@mail
c@mail → c@mail
d@mail → d@mail
Also, map names:


a@mail → John
b@mail → John
c@mail → John
d@mail → Mary
Step 2: Union emails in the same account
First account: ["John","a@mail","b@mail"]
Union(a, b) → now:


parent[a@mail] = b@mail
Second account: ["John","b@mail","c@mail"]
Union(b, c) → now:


parent[b@mail] = c@mail
(and since a@mail → b@mail → c@mail, all 3 belong to same set)
Third account: ["Mary","d@mail"] → only one email, no union needed.

Step 3: Find roots
Now we compress paths so each email points directly to its root:


find(a@mail) → c@mail
find(b@mail) → c@mail
find(c@mail) → c@mail
find(d@mail) → d@mail
Step 4: Group by root
Group emails that share the same root:


c@mail → [a@mail, b@mail, c@mail]
d@mail → [d@mail]
Step 5: Build result
Attach the name using any email from the group:


["John","a@mail","b@mail","c@mail"]
["Mary","d@mail"]
✅ Done.

⚡ Key takeaway:
Instead of building adjacency lists (graph) and traversing, Union-Find just merges emails into sets by 
their roots. At the end, grouping by root gives the connected components.
*/

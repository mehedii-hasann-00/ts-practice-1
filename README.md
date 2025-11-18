
      # TypeScript Interview Questions Blog (Bangla)

      This blog post answers some important TypeScript interview questions in **Bangla**.

      ---

      ## 1. **TypeScript-এ Interface এবং Type এর মধ্যে কিছু পার্থক্য কি?**

      TypeScript-এ **interface** এবং **type** দুটোই ডাটা স্ট্রাকচার ডিফাইন করার জন্য ব্যবহৃত হয়, তবে এদের মধ্যে কিছু পার্থক্য রয়েছে। নিচে এই দুইটির মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য দেওয়া হলো:

      ### 1.1 **Extension (বিস্তৃতি) এবং Merging (একত্রিতকরণ):**
      - **Interface**: আপনি **interface** কে একাধিক বার ডিফাইন করতে পারেন এবং তা একত্রিত হয়ে যাবে। অর্থাৎ, একই নামের interface যদি আবার ডিফাইন করা হয়, তবে তার প্রপার্টি যোগ হয়ে যাবে。

        উদাহরণ:
        interface Person {
          name: string;
        }

        interface Person {
          age: number;
        }

        const person: Person = {
          name: 'Alice',
          age: 30,
        };

        এখানে, \`Person\` interface দুটি আলাদা ভাবে ডিফাইন করা হলেও এগুলি একত্রিত হয়ে একটি পূর্ণ \`Person\` interface তৈরি করেছে।

      - **Type**: **type** শুধুমাত্র একবার ডিফাইন করা যায়। তবে, **intersection types** ব্যবহার করে আপনি একই ধরনের কিছু ধরনের একত্রিত করতে পারেন।

        উদাহরণ:
        type Person = {
          name: string;
        };

        type Age = {
          age: number;
        };

        type PersonWithAge = Person & Age;

        const person: PersonWithAge = {
          name: 'Alice',
          age: 30,
        };
       

      ### 1.2 **Object Shape (অবজেক্টের আকার):**
      - **Interface** সাধারণত অবজেক্টের শেপ (structure) ডিফাইন করার জন্য ব্যবহৃত হয়।
      - **Type** শুধু অবজেক্ট শেপের জন্য নয়, আপনি এর মাধ্যমে ইউনিয়ন টাইপ বা প্রিমিটিভ টাইপও ডিফাইন করতে পারেন।

      ### 1.3 **Instantiation (ইনস্ট্যান্টিয়েশন):**
      - **Interface**-কে কখনোই **new** ব্যবহার করে ইনস্ট্যান্টিয়েট করা যায় না, এটি শুধুমাত্র একটি রেফারেন্স হিসেবে ব্যবহৃত হয়।
      - **Type**-কে এক্সপ্রেসিভলি \`new\` ব্যবহার করে ইনস্ট্যান্টিয়েট করা যায় না, তবে \`type\` ব্যবহারের মাধ্যমে যেকোনো ধরনের নতুন টাইপ তৈরি করা যেতে পারে।

      ---

      ## 2. **TypeScript-এ \`keyof\` কীওয়ার্ডের ব্যবহার? উদাহরণ দিন।**

      TypeScript-এ **\`keyof\`** কীওয়ার্ড একটি শক্তিশালী টুল যা একটি অবজেক্টের সব কীগুলোর union টাইপ তৈরি করতে ব্যবহৃত হয়। এটি সাধারণত তখন ব্যবহার করা হয় যখন আপনি একটি অবজেক্টের কীগুলির মধ্যে কোন একটি কীগুলোর সাথে কাজ করতে চান।

      ### উদাহরণ:
     ts
      interface Person {
        name: string;
        age: number;
        city: string;
      }

      // \`keyof Person\` হবে 'name' | 'age' | 'city'
      type PersonKey = keyof Person;

      function getPersonDetail(person: Person, key: PersonKey): string {
        return person[key];
      }

      const person: Person = { name: 'John', age: 30, city: 'Dhaka' };

      console.log(getPersonDetail(person, 'name')); // John
      console.log(getPersonDetail(person, 'age'));  // 30
     

      এখানে, \`keyof Person\` টাইপ তৈরি করছে \`'name' | 'age' | 'city'\`, অর্থাৎ \`Person\` অবজেক্টের যেকোনো কীগুলির union টাইপ তৈরি হচ্ছে। ফাংশন \`getPersonDetail\` একটি \`key\` নেয়, যা \`Person\` এর কীগুলির মধ্যে একটি হতে হবে এবং তারপর সেই কীগুলোর মান ফেরত দেয়।

      ---

      ## 3. **TypeScript-এ any, unknown, এবং never টাইপের মধ্যে পার্থক্য কি?**

      TypeScript-এ **\`any\`**, **\`unknown\`**, এবং **\`never\`** টাইপের মধ্যে কিছু পার্থক্য রয়েছে, যা নিচে ব্যাখ্যা করা হলো:

      ### 3.1 **any**
      - **\`any\`** টাইপ ব্যবহার করলে আপনি যেকোনো ধরনের ডাটা অ্যাসাইন করতে পারেন। এটি টাইপ চেকিং বypass করে এবং TypeScript একে সব ধরনের টাইপ হিসেবে দেখে।

        উদাহরণ:
       ts
        let value: any = 10;
        value = 'Hello';  // Valid
        value = true;     // Valid
       

      ### 3.2 **unknown**
      - **\`unknown\`** টাইপটি **\`any\`** এর মতো দেখতে হলেও এর মধ্যে পার্থক্য হল, আপনি **\`unknown\`** টাইপের মান নিয়ে কাজ করতে আগে টাইপ চেকিং করতে হবে। এটা বেশি সেফ ও টাইপ সিস্টেমের সাথে কমপ্লায়েন্ট।

        উদাহরণ:
       ts
        let value: unknown = 10;
        // value.toUpperCase();  // Error: Object is of type 'unknown'.

        if (typeof value === 'string') {
          value.toUpperCase();  // Valid
        }
       

      ### 3.3 **never**
      - **\`never\`** টাইপ ব্যবহার করা হয় এমন কোন ফাংশনের জন্য যা কখনোই রিটার্ন করে না। যেমন একটি ফাংশন যা ইনফিনিট লুপে চলে বা এক্সেপশন থ্রো করে।

        উদাহরণ:
       ts
        function throwError(message: string): never {
          throw new Error(message);
        }

        // This function will never return a value.
       

      ---

      ## 4. **TypeScript-এ Enum এর ব্যবহার কি? Numeric এবং String Enum এর উদাহরণ দিন।**

      TypeScript-এ **\`enum\`** একটি বিশেষ টাইপ যা কিছু কনস্ট্যান্ট মানের সেট প্রতিনিধিত্ব করে। এটির মাধ্যমে কোডের readability এবং maintainability বেড়ে যায়।

      ### 4.1 **Numeric Enum**
     ts
      enum Direction {
        Up = 1,
        Down,
        Left,
        Right
      }

      console.log(Direction.Up);    // 1
      console.log(Direction.Right); // 4
     

      ### 4.2 **String Enum**
     ts
      enum Status {
        Active = 'ACTIVE',
        Inactive = 'INACTIVE',
        Pending = 'PENDING'
      }

      console.log(Status.Active);   // 'ACTIVE'
      console.log(Status.Pending);  // 'PENDING'
     

      ---

      ## 5. **Union এবং Intersection টাইপের ব্যবহার উদাহরণ দিন।**

      ### 5.1 **Union Types**
      Union টাইপ ব্যবহার করা হয় একাধিক টাইপের মধ্যে একটি নির্বাচনের জন্য। এটি **\`|\`** চিহ্ন ব্যবহার করে।

     ts
      type StringOrNumber = string | number;

      let value: StringOrNumber;
      value = 10;     // Valid
      value = 'Hello'; // Valid
     

      ### 5.2 **Intersection Types**
      Intersection টাইপ দুটি বা তার বেশি টাইপ একত্রিত করতে ব্যবহার করা হয়। এটি **\`&\`** চিহ্ন ব্যবহার করে।

     ts
      type Person = {
        name: string;
        age: number;
      };

      type Employee = {
        id: number;
        position: string;
      };

      type EmployeeDetails = Person & Employee;

      const employee: EmployeeDetails = {
        name: 'John',
        age: 30,
        id: 1,
        position: 'Developer'
      };
     

      ---

      ## Copyable Code

     html
      <button onclick="copyCode()">Copy Code</button>

      <script>
        function copyCode() {
          const code = \`
            interface Person {
              name: string;
              age: number;
              city: string;
            }

            type PersonKey = keyof Person;

            function getPersonDetail(person: Person, key: PersonKey): string {
              return person[key];
            }

            const person: Person = { name: 'John', age: 30, city: 'Dhaka' };

            console.log(getPersonDetail(person, 'name')); // John
            console.log(getPersonDetail(person, 'age'));  // 30
          \`;
          navigator.clipboard.writeText(code).then(function() {
            alert("Code copied to clipboard!");
          }, function() {
            alert("Failed to copy code!");
          });
        }
     

      ### Steps:
      1. Simply **copy the entire code** above.
      2. Press the **"Copy Code" button**.
      3. The **code** will be copied to your clipboard for use.

      ---

      ## Conclusion

      This blog post provides a clear explanation of some important TypeScript concepts, including **interfaces**, **types**, **\`keyof\`**, **\`any\`**, **\`unknown\`**, **\`never\`**, **enums**, and **union and intersection types**.

   

Drag & Drop | Organize Smarter
==============================

دليل تعليمي لشرح مشروع **منظّم الأفكار والمهام باستخدام السحب والإفلات (Drag & Drop)**، والمبني باستخدام **HTML وTailwind CSS وTypeScript**.

يشرح هذا الملف فكرة المشروع، ودور عناصر HTML الأساسية، وطريقة استخدام Tailwind CSS في التنسيق، ومنطق TypeScript خطوة بخطوة.

* * *

فهرس المحتويات
--------------

1. [نظرة عامة على المشروع](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#1-%D9%86%D8%B8%D8%B1%D8%A9-%D8%B9%D8%A7%D9%85%D8%A9-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9)

2. [التقنيات المستخدمة](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#2-%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AE%D8%AF%D9%85%D8%A9)

3. [كيف يعمل التطبيق؟](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#3-%D9%83%D9%8A%D9%81-%D9%8A%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82)

4. [عناصر HTML التي يستخدمها TypeScript](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#4-%D8%B9%D9%86%D8%A7%D8%B5%D8%B1-html-%D8%A7%D9%84%D8%AA%D9%8A-%D9%8A%D8%B3%D8%AA%D8%AE%D8%AF%D9%85%D9%87%D8%A7-typescript)

5. [تنسيق الواجهة باستخدام Tailwind CSS](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#5-%D8%AA%D9%86%D8%B3%D9%8A%D9%82-%D8%A7%D9%84%D9%88%D8%A7%D8%AC%D9%87%D8%A9-%D8%A8%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-tailwind-css)

6. [تنظيم كود TypeScript](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#6-%D8%AA%D9%86%D8%B8%D9%8A%D9%85-%D9%83%D9%88%D8%AF-typescript)
   
   * [6.1 الوصول إلى عناصر DOM](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#61-%D8%A7%D9%84%D9%88%D8%B5%D9%88%D9%84-%D8%A5%D9%84%D9%89-%D8%B9%D9%86%D8%A7%D8%B5%D8%B1-dom)
   
   * [6.2 إعدادات الصناديق والبيانات](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#62-%D8%A5%D8%B9%D8%AF%D8%A7%D8%AF%D8%A7%D8%AA-%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%AF%D9%8A%D9%82-%D9%88%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA)
   
   * [6.3 إنشاء العناصر وعرضها](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#63-%D8%A5%D9%86%D8%B4%D8%A7%D8%A1-%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D8%B5%D8%B1-%D9%88%D8%B9%D8%B1%D8%B6%D9%87%D8%A7)
   
   * [6.4 إضافة فكرة جديدة](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#64-%D8%A5%D8%B6%D8%A7%D9%81%D8%A9-%D9%81%D9%83%D8%B1%D8%A9-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9)
   
   * [6.5 إدارة رسائل الصناديق الفارغة](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#65-%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%B1%D8%B3%D8%A7%D8%A6%D9%84-%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%AF%D9%8A%D9%82-%D8%A7%D9%84%D9%81%D8%A7%D8%B1%D8%BA%D8%A9)
   
   * [6.6 إدارة السحب والإفلات](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#66-%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%B3%D8%AD%D8%A8-%D9%88%D8%A7%D9%84%D8%A5%D9%81%D9%84%D8%A7%D8%AA)
   
   * [6.7 تهيئة التطبيق عند تشغيله](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#67-%D8%AA%D9%87%D9%8A%D8%A6%D8%A9-%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D8%B9%D9%86%D8%AF-%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%87)

7. [أهم مفاهيم TypeScript](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#7-%D8%A3%D9%87%D9%85-%D9%85%D9%81%D8%A7%D9%87%D9%8A%D9%85-typescript)

8. [واجهات المتصفح البرمجية المستخدمة](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#8-%D9%88%D8%A7%D8%AC%D9%87%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%AA%D8%B5%D9%81%D8%AD-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AE%D8%AF%D9%85%D8%A9)

9. [حفظ البيانات والقيود الحالية](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#9-%D8%AD%D9%81%D8%B8-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D9%82%D9%8A%D9%88%D8%AF-%D8%A7%D9%84%D8%AD%D8%A7%D9%84%D9%8A%D8%A9)

10. [تسلسل تنفيذ التطبيق](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#10-%D8%AA%D8%B3%D9%84%D8%B3%D9%84-%D8%AA%D9%86%D9%81%D9%8A%D8%B0-%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82)

11. [قائمة اختبار المشروع](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#11-%D9%82%D8%A7%D8%A6%D9%85%D8%A9-%D8%A7%D8%AE%D8%AA%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9)

12. [تحسينات مستقبلية مقترحة](https://chatgpt.com/g/g-p-6a99dbcc2d2081918e7fb3470430d0b3-my-portfolio-lmwq-lshkhs/c/6ad9c295-9814-83ea-b83b-b43d219d21df#12-%D8%AA%D8%AD%D8%B3%D9%8A%D9%86%D8%A7%D8%AA-%D9%85%D8%B3%D8%AA%D9%82%D8%A8%D9%84%D9%8A%D8%A9-%D9%85%D9%82%D8%AA%D8%B1%D8%AD%D8%A9)

* * *

1. نظرة عامة على المشروع

------------------------

**Drag & Drop | Organize Smarter** هو تطبيق بسيط لتنظيم الأفكار والمهام. يستطيع المستخدم إضافة فكرة جديدة، ثم سحب العنصر الذي يمثلها وإفلاته داخل أحد الصناديق الأربعة لتنظيم أفكاره بصريًا.

الصناديق الأربعة هي:

* **My Ideas:** الصندوق الأول، وتظهر فيه الأفكار الجديدة والأفكار المحفوظة عند فتح الصفحة.

* **In Progress:** للأفكار التي بدأ المستخدم العمل عليها.

* **Completed:** للأفكار التي انتهى المستخدم من تنفيذها.

* **Future Plans:** للأفكار التي ينوي المستخدم تنفيذها مستقبلًا.

عند نقل عنصر إلى صندوق آخر، تتغير ألوان الحدود والخلفية عند مرور المؤشر عليه، لتناسب الصندوق الجديد. ويحتوي كل صندوق أيضًا على رسالة تظهر عندما يكون فارغًا.

### الوظائف الأساسية

* إضافة الأفكار باستخدام حقل إدخال وزر.

* منع إضافة الأفكار الفارغة أو التي تحتوي على مسافات فقط.

* حفظ نصوص الأفكار في `localStorage` داخل المتصفح.

* استعادة الأفكار المحفوظة عند تشغيل الصفحة.

* نقل العناصر بين الصناديق باستخدام السحب والإفلات.

* تغيير Classes الألوان وفقًا للصندوق الذي انتقل إليه العنصر.

* إظهار رسائل الصناديق الفارغة وإخفاؤها تلقائيًا.

* * *

2. التقنيات المستخدمة

---------------------

| التقنية                | وظيفتها في المشروع                                                     |
| ---------------------- | ---------------------------------------------------------------------- |
| HTML5                  | بناء هيكل الصفحة والعناصر التي يتعامل معها التطبيق.                    |
| Tailwind CSS           | تنسيق التخطيط والمسافات والألوان والحدود، باستخدام Classes جاهزة.      |
| TypeScript             | إدارة الإدخال وإنشاء العناصر وحفظ البيانات والتعامل مع السحب والإفلات. |
| DOM API                | تمكين TypeScript من الوصول إلى عناصر HTML وإنشائها وتعديلها ونقلها.    |
| `localStorage`         | حفظ نصوص الأفكار داخل المتصفح.                                         |
| HTML Drag and Drop API | توفير الأحداث اللازمة لسحب العناصر وإفلاتها داخل الصناديق.             |

* * *

3. كيف يعمل التطبيق؟

--------------------

يعمل التطبيق وفق التسلسل العام التالي:

1. يصل TypeScript إلى عناصر HTML التي يحتاج إليها.

2. يقرأ الأفكار المحفوظة سابقًا من `localStorage`.

3. ينشئ عنصرًا لكل فكرة محفوظة.

4. يستطيع المستخدم كتابة فكرة جديدة والضغط على زر الإضافة.

5. يتحقق TypeScript من صحة الإدخال، ويضيف الفكرة إلى المصفوفة، ويحفظ المصفوفة، ثم يعرض العنصر الجديد.

6. يستطيع المستخدم سحب أي عنصر وإفلاته داخل صندوق آخر.

7. تتغير Classes الألوان الخاصة بالعنصر لتناسب الصندوق الجديد.

8. يعيد التطبيق تحديد رسائل الصناديق الفارغة بعد إضافة العناصر أو نقلها.

تم تقسيم كود TypeScript إلى أجزاء، بحيث يكون لكل جزء مسؤولية واضحة.

* * *

4. عناصر HTML التي يستخدمها TypeScript

--------------------------------------

يتوقع كود TypeScript أن تحتوي صفحة HTML على العناصر التي تحمل المحددات التالية. يجب أن تتطابق أسماء المحددات مع الأسماء الموجودة في HTML.

| المحدد                   | وظيفته                                                          |
| ------------------------ | --------------------------------------------------------------- |
| `#newItemIdeaInput`      | حقل الإدخال الذي يكتب المستخدم بداخله الفكرة الجديدة.           |
| `#addNewItemButton`      | الزر المسؤول عن إضافة الفكرة.                                   |
| `#FirstBoxItemContainer` | الحاوية التي تظهر بداخلها العناصر الجديدة والمحفوظة في البداية. |
| `.box`                   | يحدد الصناديق الأربعة التي يمكن نقل العناصر بينها.              |
| `.emptyState`            | يحدد رسائل الحالة الفارغة داخل الصناديق.                        |
| `.items`                 | يحدد الحاوية التي تستقبل العناصر داخل كل صندوق.                 |
| `.item`                  | الـ Class التي تُضاف إلى كل عنصر يتم إنشاؤه لتمثيل فكرة.        |

### لماذا يجب أن تتطابق المحددات؟

على سبيل المثال، هذا السطر في TypeScript:
    document.querySelector<HTMLInputElement>("#newItemIdeaInput");

يبحث داخل الصفحة عن عنصر يحمل `id="newItemIdeaInput"`.

* الرمز `#` يعني أن البحث يتم باستخدام `id`.

* الرمز `.` يعني أن البحث يتم باستخدام `class`.

إذا غيّرنا اسم `id` أو `class` في HTML ولم نحدّث الاسم المقابل في TypeScript، فقد يفشل الكود في العثور على العنصر المطلوب.

### لماذا نفصل بين `.box` و`.items`؟

يمثل `.box` الصندوق بالكامل، بينما تمثل `.items` الحاوية الداخلية التي تستقبل العناصر.

هذا الفرق مهم عند الإفلات؛ إذ يستقبل الصندوق حدث الإفلات، لكن العنصر يُضاف إلى الحاوية الداخلية `.items`. وبذلك يمكن أن تظل رسالة الحالة الفارغة منفصلة عن قائمة العناصر.

* * *

5. تنسيق الواجهة باستخدام Tailwind CSS

--------------------------------------

تُستخدم Tailwind CSS لتنسيق الصفحة من خلال Classes تُكتب مباشرة داخل HTML، وكذلك داخل العناصر التي ينشئها TypeScript.

من الـ Classes المشتركة بين عناصر الأفكار:
    const sharedItemClasses: string =    "item cursor-grab wrap-anywhere rounded-xl border px-4 py-3.5 text-sm font-medium text-slate-200 shadow-lg transition duration-1000 active:cursor-grabbing sm:text-base";

### وظيفة الـ Classes المشتركة

| Class                    | وظيفتها                                                   |
| ------------------------ | --------------------------------------------------------- |
| `item`                   | تحدد العنصر باعتباره عنصر فكرة يستخدمه منطق التطبيق.      |
| `cursor-grab`            | تعرض مؤشرًا يشير إلى إمكانية سحب العنصر.                  |
| `wrap-anywhere`          | تسمح بتقسيم النصوص الطويلة حتى لا تتجاوز حدود الحاوية.    |
| `rounded-xl`             | تجعل زوايا العنصر مستديرة.                                |
| `border`                 | تضيف حدودًا للعنصر.                                       |
| `px-4`                   | تضيف مسافة داخلية أفقية.                                  |
| `py-3.5`                 | تضيف مسافة داخلية رأسية.                                  |
| `text-sm`                | تحدد حجم النص ليكون صغيرًا افتراضيًا.                     |
| `font-medium`            | تحدد سُمك الخط ليكون متوسطًا.                             |
| `text-slate-200`         | تحدد لون النص بدرجة فاتحة من اللون الرمادي المائل للأزرق. |
| `shadow-lg`              | تضيف ظلًا واضحًا للعنصر.                                  |
| `transition`             | تسمح بانتقالات تدريجية للتغييرات المدعومة في التنسيق.     |
| `duration-1000`          | تحدد مدة الانتقال لتكون 1000 مللي ثانية.                  |
| `active:cursor-grabbing` | تغيّر شكل المؤشر أثناء الضغط على العنصر.                  |
| `sm:text-base`           | تستخدم حجم النص الأساسي عند نقطة التوقف `sm` وما فوقها.   |

الـ Class المسماة `item` ليست للتنسيق فقط؛ إذ تستخدمها الدالة `updateEmptyStates()` لحساب عدد العناصر الموجودة داخل كل صندوق.

### Classes الألوان الخاصة بالصناديق

يمتلك كل صندوق مجموعة Classes خاصة بألوان الحدود والخلفية عند مرور المؤشر:
    const itemColorClassesByBox: { [boxName: string]: string } = {    firstBox: "border-blue-400/15 hover:border-blue-400/50 hover:bg-blue-500/10",    secondBox: "border-teal-400/15 hover:border-teal-400/50 hover:bg-teal-500/10",    thirdBox: "border-amber-400/15 hover:border-amber-400/50 hover:bg-amber-500/10",    fourthBox: "border-fuchsia-400/15 hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10"};

يربط هذا الكائن اسم كل صندوق بالنص الذي يحتوي على Classes الألوان الخاصة به.

* `firstBox` يستخدم اللون الأزرق.

* `secondBox` يستخدم اللون الفيروزي.

* `thirdBox` يستخدم اللون الكهرماني.

* `fourthBox` يستخدم اللون الفوشيا.

عندما ينتقل عنصر إلى صندوق آخر، يزيل الكود Classes الألوان القديمة ويضيف Classes الألوان الخاصة بالصندوق الجديد، مع الاحتفاظ بالتنسيقات المشتركة للعنصر.

* * *

6. تنظيم كود TypeScript

-----------------------

تم تقسيم كود TypeScript إلى سبعة أجزاء رئيسية.

### 6.1 الوصول إلى عناصر DOM

**الهدف:** الوصول إلى عناصر HTML التي يحتاج إليها التطبيق.
    const newItemIdeaInput: HTMLInputElement | null =    document.querySelector<HTMLInputElement>("#newItemIdeaInput");const addNewItemButton: HTMLButtonElement | null =    document.querySelector<HTMLButtonElement>("#addNewItemButton");const FirstBoxItemContainer: HTMLDivElement | null =    document.querySelector<HTMLDivElement>("#FirstBoxItemContainer");const boxes: NodeListOf<HTMLDivElement> =    document.querySelectorAll<HTMLDivElement>(".box");const emptyStates: NodeListOf<HTMLDivElement> =    document.querySelectorAll<HTMLDivElement>(".emptyState");const items: NodeListOf<HTMLDivElement> =    document.querySelectorAll<HTMLDivElement>(".items");

#### شرح الكود

* `document.querySelector()` يبحث عن أول عنصر يطابق المحدد، ويعيد `null` إذا لم يجد عنصرًا مطابقًا.

* `document.querySelectorAll()` يعيد مجموعة تحتوي على كل العناصر المطابقة للمحدد.

* `HTMLInputElement` يحدد نوع عنصر الإدخال.

* `HTMLButtonElement` يحدد نوع الزر.

* `HTMLDivElement` يحدد نوع عنصر `div`.

* `NodeListOf<HTMLDivElement>` يحدد مجموعة من عناصر `div`.

استخدمنا `| null` لأن `querySelector()` قد لا يجد العنصر المطلوب. لذلك يجب التأكد من وجود العنصر قبل استخدامه.

**ملاحظة:** المتغير `items` مُعرّف في الكود، لكنه غير مستخدم في المنطق الحالي؛ إذ يبحث معالج السحب والإفلات عن الحاوية `.items` مباشرة داخل الصندوق المستهدف. يمكن مراجعة المتغير لاحقًا إذا أردنا إزالة المتغيرات غير المستخدمة.

* * *

### 6.2 إعدادات الصناديق والبيانات

**الهدف:** تنظيم أسماء الصناديق والألوان والبيانات المحفوظة في مكان واضح.

#### تحديد أسماء الصناديق

    const boxNames: string[] = [    "firstBox",    "secondBox",    "thirdBox",    "fourthBox"];

تحتوي المصفوفة على أسماء الصناديق بالترتيب نفسه الذي تظهر به عناصر `.box` في HTML.

هذا الترتيب مهم؛ لأن الكود يحدد رقم الصندوق الذي حدث فيه الإفلات، ثم يستخدم هذا الرقم للوصول إلى اسمه وألوانه.

#### تحديد Classes الألوان

    const itemColorClassesByBox: { [boxName: string]: string } = {    firstBox: "border-blue-400/15 hover:border-blue-400/50 hover:bg-blue-500/10",    secondBox: "border-teal-400/15 hover:border-teal-400/50 hover:bg-teal-500/10",    thirdBox: "border-amber-400/15 hover:border-amber-400/50 hover:bg-amber-500/10",    fourthBox: "border-fuchsia-400/15 hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10"};

النوع:
    { [boxName: string]: string }

يعني أن الكائن يحتوي على مفاتيح نصية، وأن قيمة كل مفتاح هي نص أيضًا.

في هذا المثال، المفتاح هو اسم الصندوق، والقيمة هي النص الذي يحتوي على Classes الألوان الخاصة به.

#### قراءة البيانات المحفوظة

    const savedTickets: string | null = localStorage.getItem("myIdeas");

تقرأ `localStorage.getItem("myIdeas")` البيانات المحفوظة تحت المفتاح `myIdeas`.

* إذا كانت البيانات موجودة، تعيد الدالة نصًا.

* إذا لم تكن موجودة، تعيد `null`.

#### تحويل البيانات المحفوظة إلى مصفوفة

    const tickets: string[] = savedTickets    ? JSON.parse(savedTickets) as string[]    : [];

يعمل هذا التعبير الشرطي كالتالي:

* إذا كانت `savedTickets` تحتوي على قيمة، يستخدم `JSON.parse()` لتحويل نص JSON إلى قيمة يمكن التعامل معها في JavaScript، ويخبر TypeScript من خلال `as string[]` أن يتعامل معها باعتبارها مصفوفة من النصوص.

* إذا لم توجد بيانات محفوظة، يستخدم مصفوفة فارغة `[]`.

المصفوفة `tickets` هي القائمة الموجودة في الذاكرة أثناء تشغيل التطبيق. تُضاف إليها الأفكار الجديدة، ثم تُحفظ مرة أخرى في `localStorage`.

**مهم:** استخدام `as string[]` لا يتحقق فعليًا من أن البيانات المحفوظة مصفوفة من النصوص؛ بل يخبر TypeScript بالنوع الذي يفترض أن تكون عليه البيانات.

* * *

### 6.3 إنشاء العناصر وعرضها

**الهدف:** إنشاء عنصر HTML يمثل فكرة، ثم إضافته إلى الصندوق الأول.
    function createTicket(ticket: string): void {    const newItem: HTMLParagraphElement = document.createElement("p");    const sharedItemClasses: string =        "item cursor-grab wrap-anywhere rounded-xl border px-4 py-3.5 text-sm font-medium text-slate-200 shadow-lg transition duration-1000 active:cursor-grabbing sm:text-base";    newItem.className =        `${sharedItemClasses} ${itemColorClassesByBox.firstBox}`;    newItem.draggable = true;    enableItemDragging(newItem);    newItem.textContent = ticket;    if (FirstBoxItemContainer === null) return;    FirstBoxItemContainer.appendChild(newItem);}

#### شرح الكود خطوة بخطوة

1. **استقبال نص الفكرة:** المعامل `ticket: string` يعني أن الدالة تستقبل نصًا يمثل الفكرة.

2. **إنشاء عنصر HTML:** تنشئ `document.createElement("p")` عنصر فقرة جديدًا.

3. **تجهيز التنسيقات المشتركة:** يخزن المتغير `sharedItemClasses` الـ Classes التي تشترك فيها كل عناصر الأفكار.

4. **تطبيق التنسيق الأولي:** يجمع `className` بين التنسيقات المشتركة وتنسيقات ألوان الصندوق الأول.

5. **السماح بالسحب:** تجعل `newItem.draggable = true` العنصر قابلًا للسحب.

6. **تفعيل أحداث السحب:** تستدعي `enableItemDragging(newItem)` لتسجيل الأحداث الخاصة ببدء السحب وانتهائه.

7. **وضع نص الفكرة:** تضيف `textContent` نص الفكرة داخل عنصر الفقرة.

8. **التأكد من وجود الحاوية:** إذا كانت `FirstBoxItemContainer` تساوي `null`، تتوقف الدالة باستخدام `return`.

9. **عرض العنصر:** تضيف `appendChild()` عنصر الفكرة إلى الحاوية الخاصة بالصندوق الأول.

نوع الإرجاع `void` يعني أن الدالة لا تُرجع قيمة؛ فمهمتها هي إنشاء العنصر وعرضه.

* * *

### 6.4 إضافة فكرة جديدة

**الهدف:** التعامل مع الضغط على زر الإضافة، والتحقق من النص، وحفظ الفكرة، ثم عرضها.
    addNewItemButton?.addEventListener("click", (): void => {    const newIdea: string = newItemIdeaInput?.value.trim() ?? "";    if (newIdea === "") return;    tickets.push(newIdea);    localStorage.setItem("myIdeas", JSON.stringify(tickets));    createTicket(newIdea);    if (newItemIdeaInput) newItemIdeaInput.value = "";    updateEmptyStates();});

#### 1. تسجيل حدث الضغط

تستخدم `addEventListener("click", ...)` لتشغيل الدالة عند الضغط على الزر.

الرمز `?.` يعني أن تسجيل الحدث يحدث فقط إذا كان `addNewItemButton` موجودًا وليس `null`.

#### 2. قراءة النص وتنظيفه

    const newIdea: string = newItemIdeaInput?.value.trim() ?? "";

* `.value` تقرأ النص الذي أدخله المستخدم.

* `.trim()` تزيل المسافات من بداية النص ونهايته.

* `?.` تمنع محاولة قراءة `value` إذا كان عنصر الإدخال غير موجود.

* `?? ""` تستخدم نصًا فارغًا إذا كانت نتيجة التعبير السابق `null` أو `undefined`.

#### 3. منع إضافة النص الفارغ

    if (newIdea === "") return;

إذا كان النص فارغًا بعد إزالة المسافات، تتوقف الدالة ولا تضيف أي عنصر.

#### 4. إضافة الفكرة إلى المصفوفة

    tickets.push(newIdea);

تضيف `push()` الفكرة الجديدة إلى نهاية المصفوفة `tickets`.

#### 5. حفظ المصفوفة

    localStorage.setItem("myIdeas", JSON.stringify(tickets));

* تحوّل `JSON.stringify(tickets)` المصفوفة إلى نص بصيغة JSON.

* تحفظ `localStorage.setItem()` النص باستخدام المفتاح `myIdeas`.

نحتاج إلى تحويل المصفوفة إلى JSON لأن `localStorage` يخزن النصوص.

#### 6. عرض الفكرة

    createTicket(newIdea);

تستدعي الدالة المسؤولة عن إنشاء عنصر HTML وإضافته إلى الصندوق الأول.

#### 7. تفريغ حقل الإدخال

    if (newItemIdeaInput) newItemIdeaInput.value = "";

إذا كان حقل الإدخال موجودًا، يتم مسح النص الموجود بداخله بعد إضافة الفكرة.

#### 8. تحديث رسائل الصناديق الفارغة

    updateEmptyStates();

تُحدّث هذه الدالة رسائل الصناديق بعد إضافة العنصر، حتى تختفي رسالة الصندوق الأول إذا أصبح يحتوي على فكرة.

* * *

### 6.5 إدارة رسائل الصناديق الفارغة

**الهدف:** إظهار رسالة الحالة الفارغة عندما لا يحتوي الصندوق على أي عناصر، وإخفاؤها عندما يحتوي على عنصر واحد أو أكثر.
    function updateEmptyStates(): void {    boxes.forEach((box: HTMLDivElement, index: number): void => {        const boxItems: NodeListOf<HTMLParagraphElement> =            box.querySelectorAll<HTMLParagraphElement>(".item");        if (emptyStates[index]) {            emptyStates[index].style.display =                boxItems.length === 0 ? "flex" : "none";        }    });}

#### 1. المرور على الصناديق

تستخدم `forEach()` للمرور على كل عنصر داخل `boxes` وتشغيل الدالة على كل صندوق.

* `box` يمثل الصندوق الحالي.

* `index` يمثل ترتيب الصندوق داخل المجموعة، ويبدأ من الصفر.

#### 2. البحث عن العناصر داخل الصندوق

    const boxItems: NodeListOf<HTMLParagraphElement> =    box.querySelectorAll<HTMLParagraphElement>(".item");

يبحث هذا السطر داخل الصندوق الحالي عن كل العناصر التي تحمل Class اسمها `item`.

وبذلك نحصل على مجموعة العناصر الموجودة داخل هذا الصندوق فقط.

#### 3. التأكد من وجود رسالة الحالة الفارغة

    if (emptyStates[index]) {

يستخدم `index` للوصول إلى رسالة الحالة الفارغة المقابلة للصندوق الحالي، ويتأكد من وجودها قبل تعديلها.

#### 4. إظهار الرسالة أو إخفاؤها

    boxItems.length === 0 ? "flex" : "none";

هذا تعبير شرطي مختصر، ويعني:

* إذا كان عدد العناصر يساوي صفرًا، اجعل قيمة `display` هي `"flex"` لإظهار الرسالة.

* إذا كان الصندوق يحتوي على عناصر، اجعل قيمة `display` هي `"none"` لإخفاء الرسالة.

استخدام `"flex"` يفترض أن تصميم رسالة الحالة الفارغة يعتمد على تخطيط Flexbox.

تُستدعى هذه الدالة بعد إضافة العناصر أو نقلها، وكذلك عند تشغيل التطبيق لأول مرة.

* * *

### 6.6 إدارة السحب والإفلات

**الهدف:** معرفة العنصر الذي يتم سحبه، والسماح للصناديق باستقباله، ثم نقله وتحديث ألوانه.

#### تخزين العنصر الذي يجري سحبه

    let draggedItem: HTMLParagraphElement | null = null;

يبدأ المتغير `draggedItem` بقيمة `null` لأنه لا يوجد عنصر يجري سحبه عند بدء تشغيل التطبيق.

استخدمنا `let` لأن قيمة المتغير تتغير أثناء التفاعل مع التطبيق.

أما النوع `HTMLParagraphElement | null` فيعني أن المتغير يمكن أن يحتوي على عنصر فقرة أو على `null`.

#### تفعيل السحب على العنصر

    function enableItemDragging(item: HTMLParagraphElement): void {    item.addEventListener("dragstart", (): void => {        console.log("Drag Started");        draggedItem = item;        item.style.opacity = "0.5";    });    item.addEventListener("dragend", (): void => {        draggedItem = null;        item.style.opacity = "1";    });}

**عند بدء السحب (**`**dragstart**`**):**

* يطلق المتصفح الحدث عندما يبدأ المستخدم سحب العنصر.

* يخزن `draggedItem = item` مرجعًا إلى العنصر الذي يجري سحبه.

* تجعل `item.style.opacity = "0.5"` العنصر شبه شفاف، لإظهار أن عملية السحب بدأت.

* تطبع `console.log("Drag Started")` رسالة في وحدة التحكم لأغراض تتبع التنفيذ وتصحيح الأخطاء.

**عند انتهاء السحب (**`**dragend**`**):**

* تعيد `draggedItem = null` المتغير إلى حالته الأصلية.

* تعيد `item.style.opacity = "1"` العنصر إلى درجة الشفافية الطبيعية.

تُستدعى هذه الدالة من داخل `createTicket()`، ولذلك يحصل كل عنصر جديد على معالجات أحداث السحب الخاصة به.

#### تفعيل الإفلات داخل كل صندوق

    boxes.forEach((box: HTMLDivElement): void => {    box.addEventListener("dragover", (event: DragEvent): void => {        event.preventDefault();    });    box.addEventListener("drop", (event: DragEvent): void => {        event.preventDefault();        if (draggedItem === null) return;        const currentDraggedItem: HTMLParagraphElement = draggedItem;        const targetItems: HTMLDivElement | null =            box.querySelector<HTMLDivElement>(".items");        if (targetItems === null) return;        targetItems.appendChild(currentDraggedItem);        const boxIndex: number = Array.from(boxes).indexOf(box);        const boxName: string = boxNames[boxIndex];        const colorClasses: string = itemColorClassesByBox[boxName];        for (const boxName of boxNames) {            const classes: string = itemColorClassesByBox[boxName];            currentDraggedItem.classList.remove(...classes.split(" "));        }        currentDraggedItem.classList.add(...colorClasses.split(" "));        updateEmptyStates();    });});

#### حدث `dragover`

    box.addEventListener("dragover", (event: DragEvent): void => {    event.preventDefault();});

يسمح استدعاء `preventDefault()` للصندوق بأن يعمل كهدف صالح للإفلات، وفق نمط العمل المعتاد لواجهة HTML Drag and Drop API.

من دون منع السلوك الافتراضي، لا يسمح المتصفح عادةً بحدوث حدث `drop` داخل هذا الهدف.

#### حدث `drop`

**1. منع السلوك الافتراضي للمتصفح**
    event.preventDefault();

يسمح هذا للتطبيق بالتحكم في طريقة التعامل مع عملية الإفلات.

**2. التأكد من وجود عنصر يجري سحبه**
    if (draggedItem === null) return;

إذا لم يكن هناك عنصر محفوظ داخل `draggedItem`، تتوقف الدالة دون محاولة نقل أي شيء.

**3. تحديد نوع العنصر المسحوب**
    const currentDraggedItem: HTMLParagraphElement = draggedItem;

بعد التأكد من أن `draggedItem` ليس `null`، يستطيع TypeScript التعامل معه باعتباره عنصر فقرة.

**4. الوصول إلى حاوية العناصر في الصندوق المستهدف**
    const targetItems: HTMLDivElement | null =    box.querySelector<HTMLDivElement>(".items");

يبحث هذا السطر عن الحاوية `.items` داخل الصندوق الذي حدث فيه الإفلات.

نضيف العنصر إلى هذه الحاوية بدلًا من إضافته مباشرة إلى الصندوق كله؛ حتى تظل بنية HTML منظمة.

**5. التوقف إذا لم توجد الحاوية**
    if (targetItems === null) return;

يمنع هذا الشرط محاولة استدعاء `appendChild()` على حاوية غير موجودة.

**6. نقل العنصر إلى الصندوق الجديد**
    targetItems.appendChild(currentDraggedItem);

تنقل `appendChild()` عنصر DOM الموجود بالفعل من الحاوية القديمة إلى الحاوية الجديدة.

لا ينشئ هذا السطر نسخة ثانية من العنصر؛ بل ينقل العنصر نفسه.

**7. تحديد الصندوق المستهدف**
    const boxIndex: number = Array.from(boxes).indexOf(box);const boxName: string = boxNames[boxIndex];

* تحوّل `Array.from(boxes)` مجموعة `NodeList` إلى مصفوفة.

* تبحث `indexOf(box)` عن ترتيب الصندوق المستهدف.

* تستخدم `boxNames[boxIndex]` هذا الترتيب للوصول إلى اسم الصندوق.

تعتمد هذه الطريقة على أن ترتيب `boxNames` يطابق ترتيب عناصر `.box` داخل HTML.

**8. الوصول إلى ألوان الصندوق الجديد**
    const colorClasses: string = itemColorClassesByBox[boxName];

يستخدم الكود اسم الصندوق كمفتاح للوصول إلى النص الذي يحتوي على Classes الألوان المناسبة.

**9. إزالة ألوان الصناديق القديمة**
    for (const boxName of boxNames) {    const classes: string = itemColorClassesByBox[boxName];    currentDraggedItem.classList.remove(...classes.split(" "));}

تمر الحلقة على أسماء الصناديق الأربعة، وتزيل من العنصر Classes الألوان المرتبطة بكل صندوق.

* تحوّل `split(" ")` النص الذي يحتوي على Classes مفصولة بمسافات إلى مصفوفة من أسماء الـ Classes.

* تمرر `...` كل Class إلى `classList.remove()` باعتبارها وسيطًا مستقلًا.

الهدف هو منع بقاء ألوان الصندوق السابق بعد النقل.

**10. تطبيق ألوان الصندوق الجديد**
    currentDraggedItem.classList.add(...colorClasses.split(" "));

تضيف هذه الخطوة Classes الألوان الخاصة بالصندوق المستهدف إلى العنصر.

**11. تحديث رسائل الحالة الفارغة**
    updateEmptyStates();

قد يصبح الصندوق الذي خرج منه العنصر فارغًا، بينما يحتوي الصندوق المستهدف على عنصر جديد؛ لذلك يجب تحديث الرسائل بعد النقل.

* * *

### 6.7 تهيئة التطبيق عند تشغيله

**الهدف:** عرض الأفكار المحفوظة وتحديث رسائل الصناديق الفارغة عند بدء تشغيل الكود.
    tickets.forEach((ticket: string): void => {    createTicket(ticket);});updateEmptyStates();

#### 1. عرض الأفكار المحفوظة

تمر `forEach()` على عناصر المصفوفة `tickets`.

في كل مرة، تستدعي `createTicket(ticket)` لإنشاء عنصر فقرة يحمل نص الفكرة وإضافته إلى الصندوق الأول.

#### 2. تحديث رسائل الصناديق الفارغة

بعد إنشاء العناصر المحفوظة، تستدعي `updateEmptyStates()` لمراجعة كل صندوق وإظهار رسالة الحالة الفارغة أو إخفائها حسب عدد العناصر الموجودة داخله.

وضع هذا الجزء في نهاية الملف يجعل ترتيب الكود أوضح؛ لأنه يأتي بعد تعريف الدوال التي يستخدمها.

يمكن استدعاء الدوال المعرّفة باستخدام `function` قبل موضع تعريفها داخل الملف؛ لأن تعريفات الدوال من هذا النوع تكون متاحة بهذه الطريقة.

كذلك، لا تكون هناك حاجة إلى دالة منفصلة باسم `hideFirstBoxEmptyState()` إذا كانت `updateEmptyStates()` تُستدعى بعد عرض الأفكار المحفوظة، لأنها تتولى بالفعل تحديث حالة الصندوق الأول وبقية الصناديق.

* * *

7. أهم مفاهيم TypeScript

------------------------

### تحديد الأنواع (Type Annotations)

تحديد النوع يعني توضيح نوع القيمة التي يُتوقع أن يحتوي عليها المتغير أو يستقبلها المعامل.
    const newIdea: string = "Learn TypeScript";

في هذا المثال، المتغير `newIdea` يحتوي على نص من النوع `string`.

### الأنواع المتحدة (Union Types)

يسمح النوع المتحد للمتغير بأن يقبل واحدًا من عدة أنواع محددة.
    let draggedItem: HTMLParagraphElement | null = null;

يمكن أن يحتوي المتغير على عنصر فقرة أو على `null`.

### أنواع عناصر DOM

من الأنواع المستخدمة في المشروع:

* `HTMLInputElement`

* `HTMLButtonElement`

* `HTMLDivElement`

* `HTMLParagraphElement`

* `NodeListOf<HTMLDivElement>`

تساعد هذه الأنواع TypeScript على معرفة الخصائص والوظائف المتاحة لكل عنصر.

### أنواع معاملات الدوال والقيم المعادة

    function createTicket(ticket: string): void {    // Function body}

* `ticket: string` يحدد أن المعامل `ticket` يستقبل نصًا.

* `: void` توضح أن الدالة لا تُرجع قيمة.

### الوصول الاختياري (Optional Chaining)

    addNewItemButton?.addEventListener("click", () => {});

يسمح الرمز `?.` بالوصول إلى الخاصية أو تنفيذ الدالة فقط إذا كانت القيمة الموجودة على يساره ليست `null` أو `undefined`.

### القيمة البديلة عند غياب القيمة (Nullish Coalescing)

    const newIdea: string = newItemIdeaInput?.value.trim() ?? "";

إذا كانت نتيجة التعبير الموجود قبل `??` هي `null` أو `undefined`، تُستخدم القيمة البديلة وهي النص الفارغ `""`.

### تأكيد النوع (Type Assertion)

    JSON.parse(savedTickets) as string[]

يخبر هذا التعبير TypeScript أن يتعامل مع القيمة الناتجة باعتبارها مصفوفة من النصوص.

لكن تأكيد النوع لا يتحقق بنفسه من أن البيانات الفعلية تتوافق مع هذا النوع.

### القوالب النصية (Template Literals)

    newItem.className = `${sharedItemClasses} ${itemColorClassesByBox.firstBox}`;

تُكتب القوالب النصية باستخدام العلامة الخلفية `` ` ``، وتسمح بإدخال قيم المتغيرات والتعبيرات داخل النص باستخدام `${...}`.

### دوال المصفوفات

* `push()` تضيف عنصرًا إلى المصفوفة.

* `forEach()` تنفذ دالة على كل عنصر في المجموعة.

* `Array.from()` تحوّل مجموعة أو قيمة شبيهة بالمصفوفة إلى مصفوفة.

* `indexOf()` تبحث عن موضع عنصر داخل المصفوفة.

### دوال وخصائص DOM

* `querySelector()` تبحث عن أول عنصر يطابق المحدد.

* `querySelectorAll()` تبحث عن كل العناصر المطابقة.

* `createElement()` تنشئ عنصر HTML جديدًا.

* `appendChild()` تضيف عنصرًا إلى عنصر أب أو تنقله إلى مكان آخر.

* `classList.add()` تضيف Classes إلى العنصر.

* `classList.remove()` تزيل Classes من العنصر.

* `textContent` تقرأ النص الموجود داخل العنصر أو تغيّره.

* `style.display` تغيّر طريقة عرض العنصر.

* `style.opacity` تغيّر درجة شفافية العنصر.

* `addEventListener()` تسجّل دالة للتعامل مع حدث معين.

* * *

8. واجهات المتصفح البرمجية المستخدمة

------------------------------------

### `localStorage`

يستخدم التطبيق عمليتين أساسيتين:
    localStorage.getItem("myIdeas");localStorage.setItem("myIdeas", JSON.stringify(tickets));

تقرأ `getItem()` النص المحفوظ، بينما تحفظ `setItem()` نصًا جديدًا.

ولأن `localStorage` يخزن النصوص، يتم تحويل المصفوفة إلى JSON قبل الحفظ، ثم تحليل النص المحفوظ عند استعادته.

### HTML Drag and Drop API

يستخدم المشروع الخصائص والأحداث التالية:

* `draggable = true`

* `dragstart`

* `dragend`

* `dragover`

* `drop`

* `event.preventDefault()`

توفر هذه الخصائص والأحداث الأساس اللازم لسحب عنصر وإفلاته داخل صندوق آخر.

### تعديل DOM

بدلًا من إعادة تحميل الصفحة عند كل تغيير، ينشئ TypeScript عناصر HTML وينقلها مباشرة داخل DOM.

وهذه هي الطريقة التي تظهر بها الأفكار الجديدة وتنتقل بها العناصر بين الصناديق.

* * *

9. حفظ البيانات والقيود الحالية

-------------------------------

يحفظ التطبيق قائمة نصوص الأفكار داخل `localStorage` باستخدام المفتاح `myIdeas`.

### ما البيانات التي يتم حفظها؟

* نص كل فكرة موجودة داخل المصفوفة `tickets`.

### ما البيانات التي لا يتم حفظها؟

* الصندوق الذي نُقلت إليه كل فكرة.

* الحالة الخاصة بكل فكرة.

* نسخة من البيانات على خادم أو إمكانية مزامنتها تلقائيًا بين الأجهزة.

**السلوك الحالي:** عند إعادة تحميل الصفحة، تُنشأ العناصر من نصوص الأفكار المحفوظة، وتظهر مرة أخرى داخل الصندوق الأول **My Ideas**. أما أماكن العناصر داخل الصناديق الأخرى وألوانها المرتبطة بهذه الأماكن فلا يتم حفظها.

يفترض الكود الحالي أيضًا أن القيمة الموجودة تحت المفتاح `myIdeas`، إذا كانت موجودة، تحتوي على JSON صحيح يمثل مصفوفة من النصوص.

إذا كانت البيانات المخزنة غير صالحة، فقد يتسبب `JSON.parse()` في حدوث خطأ. يمكن إضافة التحقق من البيانات ومعالجة الأخطاء في تحسين منفصل لاحقًا.

* * *

10. تسلسل تنفيذ التطبيق

-----------------------

يوضح المخطط التالي تسلسل العمليات الأساسية:
    فتح الصفحة    |    vالوصول إلى عناصر HTML    |    vقراءة "myIdeas" من localStorage    |    vإنشاء العناصر المحفوظة وعرضها    |    vتحديث رسائل الصناديق الفارغة    |    +------------------------------+    |                              |    v                              vالمستخدم يضيف فكرة           المستخدم يسحب عنصرًا    |                              |    v                              vقراءة النص وإزالة المسافات   بدء السحب وحفظ العنصر    |                              |    v                              vرفض النص الفارغ              الإفلات داخل صندوق مستهدف    |                              |    v                              vتحديث مصفوفة tickets         نقل العنصر إلى الحاوية المستهدفة    |                              |    v                              vحفظ المصفوفة في localStorage تغيير Classes الألوان    |                              |    v                              vإنشاء العنصر وعرضه           تحديث رسائل الصناديق الفارغة    |    vمسح حقل الإدخال وتحديث الرسائل

* * *

11. قائمة اختبار المشروع

------------------------

استخدم القائمة التالية للتأكد من عمل الوظائف الحالية:

* تفتح الصفحة دون ظهور أخطاء في وحدة التحكم.

* تظهر الأفكار المحفوظة داخل **My Ideas** بعد إعادة تحميل الصفحة.

* الضغط على زر الإضافة مع ترك حقل الإدخال فارغًا لا يضيف عنصرًا.

* تُزال المسافات من بداية الفكرة الجديدة ونهايتها.

* تظهر الفكرة الصحيحة داخل الصندوق الأول.

* يُمسح حقل الإدخال بعد إضافة الفكرة.

* تظل نصوص الأفكار محفوظة بعد إعادة تحميل الصفحة.

* يمكن سحب العنصر إلى كل صندوق من الصناديق الأخرى.

* يحصل العنصر على Classes الألوان الخاصة بالصندوق المستهدف.

* تظهر رسالة الحالة الفارغة في الصندوق المصدر إذا أصبح فارغًا.

* تختفي رسالة الصندوق المستهدف بعد استقبال عنصر.

* تظهر رسائل الحالة الفارغة في الصناديق التي لا تحتوي على عناصر.

* * *

12. تحسينات مستقبلية مقترحة

---------------------------

هذه أفكار يمكن إضافتها في إصدارات مستقبلية، وليست وظائف منفذة في الكود الحالي:

* حفظ الصندوق الذي ينتمي إليه كل عنصر، حتى يظل مكانه محفوظًا بعد إعادة تحميل الصفحة.

* إضافة زر لحذف عنصر معين.

* إضافة إمكانية تعديل نص الفكرة الموجودة.

* التحقق من صحة بيانات `localStorage` ومعالجة البيانات غير الصالحة.

* تحسين إمكانية استخدام التطبيق بلوحة المفاتيح لمن لا يستطيعون استخدام السحب والإفلات.

* إضافة اختبارات آلية لإنشاء العناصر ونقلها.

* * *

الخلاصة
-------

يوضح هذا المشروع كيف يمكن أن تعمل HTML وTailwind CSS وTypeScript وواجهات المتصفح البرمجية معًا لإنشاء تطبيق تفاعلي بسيط.

ينقسم ملف TypeScript إلى سبع مسؤوليات رئيسية:

1. الوصول إلى عناصر HTML.

2. إعداد بيانات الصناديق والألوان.

3. إنشاء العناصر وعرضها.

4. إضافة الأفكار الجديدة.

5. إدارة رسائل الصناديق الفارغة.

6. التعامل مع السحب والإفلات.

7. تهيئة التطبيق وعرض الأفكار المحفوظة.

يساعد تنظيم الكود بهذه الطريقة على فهم كل جزء من المشروع، وتتبع طريقة عمله، واختباره وصيانته بسهولة أكبر.

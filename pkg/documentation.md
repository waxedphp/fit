# Fit

Making element fitts to the end of page, as overflowed element.

Additionally, it is possible to use it to scroll to some element inside.

MIT license

---

### PHP:

```

$this->waxed->display([
  'payload1' =>
  [
    'scrollToName' => 'someAnchorName'
  ],
], 'template');


```


```

$this->waxed->display([
  'payload1' =>
  [
    'scrollTo' => 'div#someElementId'
  ],
], 'template');


```

---


### HTML:

```

<div class="waxed-fit paddedright-20"
data-name="payload1"
></div>


```

---
---


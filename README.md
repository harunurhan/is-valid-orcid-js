### is-valid-orcid

```typescript
import isValidOrcid from 'is-valid-orcid';

isValidOrcid('0000-0002-0088-0052') // true
isValidOrcid('0000000200880052') // false (requires hypens)
isValidOrcid('0000-0002-0088-0052') // false (invalid)
```

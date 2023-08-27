# TSX bug reproduction

```
/
|-- src
      |-- file.ts
      |-- dir1
            |-- file1.ts
            +-- file2.ts
     +-- dir2
            |-- file1.ts
            +-- file2.ts
+-- test
      |-- file.test.ts
      |-- dir1
            |-- file1.test.ts
            +-- file2.test.ts
     +-- dir2
            |-- file1.test.ts
            +-- file2.test.ts
```
```
tsx --test
```
Should search for __test__ directory and recursively search __*.test.ts__ files
```
tsx --test <directory>
```
Should recursively search __*.test.ts__ files in specified directory

In both cases it search for __*.test.js__ files, like it specified in `NodeJS` documentation.
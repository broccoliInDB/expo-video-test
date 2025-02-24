# Expo AV vs. Expo Video Memory Leak Comparison  

## ✅ How to Check  

##### 1. Start the App  
```sh
npx expo start -ci
```

##### 2.Turn on Performance Monitor
- Open the performance monitor.
- Press the GC (red button) multiple times to clear memory.

##### 3.Check Expo AV Memory Usage
- Click the "Move Video (Old)" button to test Expo AV.
- Navigate back to the home screen and observe how much memory has increased.

##### 3-1.Check Expo Video Memory Usage

- Click the "Move Video" button to test Expo Video.
- Navigate back to the home screen and observe how much memory has increased.

### conclusion

> In this scenario, I found that Expo Video does not properly release memory when the component is unmounted.
While Expo AV also has some memory leakage, it is significantly less severe compared to Expo Video.

🚨If there's anything I should have done differently for this test, let me know and I'll refine it!
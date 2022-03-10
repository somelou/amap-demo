declare global {

  interface ArrayConstructor {

    /**
     * 两个数组的交集
     * @param a 数组a
     * @param b 数组b
     */
    intersect<T>(a: T[], b: T[]): T[];

    /**
     * 两个数组的差集
     * @param a 数组a
     * @param b 数组b
     */
    minus<T>(a: T[], b: T[]): T[];

    /**
     * 两个数组的补集
     * @param a 数组a
     * @param b 数组b
     */
    complement<T>(a: T[], b: T[]): T[];

    /**
     * 两个数组的并集
     * @param a 数组a
     * @param b 数组b
     */
    union<T>(a: T[], b: T[]): T[];
  }
  
  interface Array<T> {

    /**
     * 数组去重
     */
    unique(): Array<T>;
  }
}

export {};

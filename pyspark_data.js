/**
 * @file pyspark_roadmap_data.js
 * @description A comprehensive, hierarchical dataset for a PySpark learning roadmap.
 * This file contains detailed explanations and multiple code examples for each concept,
 * function, and command in the PySpark ecosystem.
 */
window.pysparkData = {
    "name": "The Ultimate PySpark Roadmap",
    "children": [
        {
            "name": "Core Concepts & Architecture",
            "children": [
                { "name": "What is Apache Spark?", "children": [{"name":"Explanation: Apache Spark is a powerful, open-source, unified analytics engine designed for large-scale, distributed data processing. Its key feature is in-memory computation, which makes it significantly faster than older paradigms like MapReduce. It provides a comprehensive framework for various data tasks, including ETL, interactive queries (SQL), advanced analytics, machine learning, and real-time stream processing."}] },
                { "name": "What is PySpark?", "children": [{"name":"Explanation: PySpark is the official Python API for Apache Spark. It allows developers to leverage the full power of Spark's distributed computing engine using the simple and expressive syntax of the Python language. It combines Python's rich data science libraries (like Pandas and Scikit-learn) with Spark's scalability, making it a dominant tool in the big data world."}] },
                {
                    "name": "Spark Architecture",
                    "children": [
                        {"name": "Driver Program", "children": [{"name":"Explanation: The Driver is the heart of a Spark application. It's the process where your main() function runs. Its primary responsibilities are to create the SparkSession, connect to the Cluster Manager, request resources (CPU, memory) for executors, and translate your PySpark code into a series of transformations and actions that are then scheduled as tasks for the executors."}]},
                        {"name": "Cluster Manager", "children": [{"name":"Explanation: The Cluster Manager is responsible for allocating and managing resources across the cluster. The Driver program communicates with the Cluster Manager to request executor processes. Popular choices include:\n- **Standalone:** A simple manager included with Spark.\n- **YARN (Yet Another Resource Negotiator):** The resource manager for Hadoop, very common in production.\n- **Kubernetes:** An increasingly popular choice for deploying Spark on containerized infrastructure.\n- **Mesos:** A general-purpose cluster manager (less common now)."}]},
                        {"name": "Executors", "children": [{"name":"Explanation: Executors are the worker processes that run on the cluster nodes (Worker Nodes). They are launched by the Cluster Manager at the request of the Driver. Each executor is responsible for two main things: 1) Executing the individual tasks assigned to it by the Driver. 2) Storing data partitions in its memory (caching) or on disk for the duration of the Spark application. They report their status and results back to the Driver."}]}
                    ]
                },
                {
                    "name": "Execution Flow: Job, Stage, Task",
                    "children": [
                        {"name": "Job", "children": [{"name":"Explanation: A Job is a parallel computation triggered by a Spark 'action' (e.g., `count()`, `collect()`, `save()`). Your entire PySpark script can contain multiple jobs, one for each action."}]},
                        {"name": "Stage", "children": [{"name":"Explanation: Spark's DAG Scheduler breaks down each job into smaller sets of tasks called 'stages'. Stages are separated by 'wide transformations' (shuffles), where data needs to be redistributed across the network. Tasks within a stage can be executed in parallel without shuffling data."}]},
                        {"name": "Task", "children": [{"name":"Explanation: A Task is the smallest unit of work in Spark. It's a single operation that runs on an executor, processing a single partition of data. For example, if you have a DataFrame with 100 partitions and apply a filter operation, Spark will launch 100 tasks (one for each partition) to execute that filter."}]},
                        {"name": "DAG (Directed Acyclic Graph)", "children": [{"name":"Explanation: When you write PySpark code, you are building a logical plan of transformations. Spark's Catalyst Optimizer takes this plan, optimizes it, and converts it into a physical Directed Acyclic Graph (DAG). The 'DAG' represents the sequence of computations to be performed. It's 'directed' because it flows from input to output, and 'acyclic' because it cannot have circular dependencies. The DAG Scheduler uses this graph to create the physical plan of stages and tasks."}]}
                    ]
                },
                {
                    "name": "Types of Transformations",
                    "children": [
                        {"name": "Narrow Transformations", "children":[{"name":"Explanation: In a narrow transformation, each input partition contributes to only one output partition. This is highly efficient because it can be computed on a single node without any data movement or 'shuffle' across the network. \nExamples: `map`, `filter`, `withColumn`"}]},
                        {"name": "Wide Transformations (Shuffles)", "children":[{"name":"Explanation: In a wide transformation, input partitions can contribute to many different output partitions. This requires Spark to perform a 'shuffle', which involves exchanging and re-distributing data across all executors on the network. Shuffles are computationally expensive and are a common performance bottleneck. \nExamples: `groupBy`, `reduceByKey`, `join`, `distinct`, `orderBy`"}]}
                    ]
                },
                {
                    "name": "Key Principles",
                    "children": [
                        {"name": "Lazy Evaluation", "children": [{"name":"Explanation: Transformations in Spark are 'lazy'. This means that when you call a transformation (like `filter()` or `withColumn()`), Spark doesn't execute it immediately. Instead, it adds it to the DAG. The actual computation is only triggered when you call an 'action' (like `show()` or `count()`). This allows Spark to see the entire workflow and optimize it before execution."}]},
                        {"name": "Immutability", "children": [{"name":"Explanation: Spark's data structures (RDDs, DataFrames, Datasets) are immutable, meaning they cannot be changed after they are created. When you apply a transformation, you are not modifying the original DataFrame; you are creating a new one. This simplifies data consistency and makes fault tolerance easier to implement."}]},
                        {"name": "Fault Tolerance", "children": [{"name":"Explanation: Spark achieves fault tolerance through its DAG. Since Spark knows the exact 'lineage' (the series of transformations) used to create any data partition, it can automatically recompute a lost partition on a different node if an executor fails. This provides resilience without requiring data replication."}]}
                    ]
                }
            ]
        },
        {
            "name": "Setup & SparkSession",
            "children": [
                { "name": "Installation", "children": [
                    {"name": "pip install pyspark", "children": [{"name":"Explanation: This is the most straightforward method for setting up PySpark for local development or on a single machine. It bundles a local Spark instance, so you don't need a separate Spark download. For more advanced use cases connecting to a cluster, you might install just the client library."}]},
                    {"name": "Java Requirement", "children": [{"name":"Explanation: Spark is built on the Java Virtual Machine (JVM), and PySpark uses a library called Py4J to communicate with the JVM. Therefore, a compatible Java Development Kit (JDK) (versions 8, 11, or 17 are common) must be installed, and the `JAVA_HOME` environment variable must be set to point to its location."}]}
                ]},
                {
                    "name": "The SparkSession",
                    "children": [
                        {"name": "from pyspark.sql import SparkSession", "children": [{"name":"Explanation: This line imports the necessary class to create a SparkSession."}]},
                        {
                            "name": "spark = SparkSession.builder.appName(\"MyApp\").getOrCreate()",
                            "children": [{
                                "name": "Explanation: This is the standard way to initialize the SparkSession, which is the unified entry point for all Spark functionality since Spark 2.0. \n- `.builder`: Accesses the builder pattern for constructing the session.\n- `.appName(\"MyApp\")`: Sets a custom name for your application, which is useful for identifying it in the Spark UI.\n- `.getOrCreate()`: Gets an existing SparkSession or creates a new one if none exists."
                            }]
                        },
                        {
                            "name": "sc = spark.sparkContext",
                            "children": [{
                                "name": "Explanation: The SparkContext is the original, lower-level entry point to Spark functionality that deals with RDDs. While most modern code uses the DataFrame API via the SparkSession, the SparkContext is still accessible and necessary for creating RDDs, using accumulators, or broadcasting variables."
                            }]
                        }
                    ]
                },
                 {
                     "name": "Configuration",
                     "children": [
                        {
                            "name": ".config('spark.executor.memory', '4g')",
                            "children": [
                                {
                                    "name": "Explanation: This method is used within the `SparkSession.builder` chain to set specific Spark configuration properties *before* the session is created. This is the preferred way to set foundational properties like memory allocation, number of cores, etc."
                                },
                                {
                                    "name": "Example 1: Setting executor and driver memory",
                                    "code": "spark = SparkSession.builder \\\n    .appName(\"ConfigExample1\") \\\n    .config(\"spark.executor.memory\", \"4g\") \\\n    .config(\"spark.driver.memory\", \"2g\") \\\n    .getOrCreate()"
                                },
                                {
                                    "name": "Example 2: Enabling Arrow for faster Python/JVM data transfer",
                                    "code": "spark = SparkSession.builder \\\n    .appName(\"ConfigExample2\") \\\n    .config(\"spark.sql.execution.arrow.pyspark.enabled\", \"true\") \\\n    .getOrCreate()"
                                }
                            ]
                        },
                        {
                            "name": "spark.conf.set('spark.sql.shuffle.partitions', '200')",
                            "children": [
                                {
                                    "name": "Explanation: This method is used to set a Spark configuration property *after* the SparkSession has already been created. This is useful for dynamically tuning properties during an interactive session or changing settings that don't require a context restart."
                                },
                                {
                                    "name": "Example 1: Adjusting shuffle partitions dynamically",
                                    "code": "# Initial session\nspark = SparkSession.builder.appName(\"RuntimeConfig\").getOrCreate()\n\n# Dynamically set a crucial performance tuning parameter\nspark.conf.set(\"spark.sql.shuffle.partitions\", 50)\n# ... run some queries ...\n\n# Adjust for a larger query\nspark.conf.set(\"spark.sql.shuffle.partitions\", 200)"
                                },
                                {
                                    "name": "Example 2: Turning off adaptive query execution for debugging",
                                    "code": "# Session is already running\n\n# Check the current value\ncurrent_value = spark.conf.get(\"spark.sql.adaptive.enabled\")\nprint(f\"AQE is currently: {current_value}\")\n\n# Disable it\nspark.conf.set(\"spark.sql.adaptive.enabled\", \"false\")\nprint(f\"AQE is now: {spark.conf.get('spark.sql.adaptive.enabled')}\")"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "RDDs In-Depth (Legacy API)",
            "children": [
                {
                    "name": "Creating RDDs",
                    "children": [
                        {
                            "name": "sc.parallelize([1, 2, 3])",
                            "children": [
                                {"name":"Explanation: Creates a Resilient Distributed Dataset (RDD) from an existing Python collection (like a list or tuple) in the driver program. This is useful for prototyping and testing with small datasets."},
                                {"name": "Example 1: Creating an RDD of numbers", "code": "numbers_list = [1, 2, 3, 4, 5]\nnumbers_rdd = sc.parallelize(numbers_list)"},
                                {"name": "Example 2: Creating an RDD of key-value pairs", "code": "kv_list = [('a', 1), ('b', 2), ('c', 3)]\nkv_rdd = sc.parallelize(kv_list)"}
                            ]
                        },
                        {
                            "name": "sc.textFile('file.txt')",
                            "children": [
                                {"name":"Explanation: Reads a text file from a local path, HDFS, or any other Hadoop-supported file system, and creates an RDD where each element is a single line of text from the file."},
                                {"name": "Example 1: Reading a local text file", "code": "# Assumes 'my_log.txt' is in the current directory\nlog_lines_rdd = sc.textFile('my_log.txt')"},
                                {"name": "Example 2: Reading from HDFS", "code": "hdfs_path = 'hdfs:///user/data/shakespeare.txt'\nplay_rdd = sc.textFile(hdfs_path)"}
                            ]
                        }
                    ]
                },
                {
                    "name": "RDD Transformations",
                    "children": [
                        {"name": "map(lambda x: x * 2)", "children":[{"name":"Applies a function to each element in the RDD and returns a new RDD with the results."}]},
                        {"name": "flatMap(lambda x: x.split(' '))", "children":[{"name":"Similar to map, but each input item can be mapped to 0 or more output items. It flattens the results."}]},
                        {"name": "filter(lambda x: x > 10)", "children":[{"name":"Returns a new RDD containing only the elements that satisfy a given condition."}]},
                        {"name": "distinct()", "children":[{"name":"Returns a new RDD containing the unique elements from the source RDD."}]},
                        {"name": "union(otherRDD)", "children":[{"name":"Returns a new RDD that contains all elements from both the source RDD and the argument RDD."}]}
                    ]
                },
                {
                    "name": "Pair RDD Transformations",
                    "children": [
                        {"name":"rdd.map(lambda x: (x, 1))", "children":[{"name":"A common pattern to create a Pair RDD (an RDD of key-value tuples) to prepare for aggregation."}]},
                        {"name": "reduceByKey(lambda a, b: a + b)", "children":[{"name":"Explanation: A highly efficient wide transformation that aggregates values for each key. It performs partial aggregation on each node before shuffling the data, minimizing network traffic."}]},
                        {"name": "groupByKey()", "children":[{"name":"Explanation: Groups all values for a given key into an iterable. It shuffles all key-value pairs, which can lead to out-of-memory errors if a key has a large number of values. `reduceByKey` or `aggregateByKey` are usually preferred."}]},
                        {"name": "sortByKey()", "children":[{"name":"Explanation: Sorts the RDD by its key. The `ascending` argument can be set to `True` or `False`."}]},
                        {"name": "join(otherPairRDD)", "children":[{"name":"Explanation: Performs an inner join between two Pair RDDs based on their keys. Left, right, and full outer joins are also available (`leftOuterJoin`, `rightOuterJoin`, `fullOuterJoin`)."}]}
                    ]
                },
                {
                    "name": "RDD Actions",
                    "children": [
                        {"name": "collect()", "children":[{"name":"Explanation: Fetches all elements of the RDD from the executors and returns them to the driver program as a Python list. This can cause the driver to run out of memory and should only be used on very small datasets."}]},
                        {"name": "count()", "children":[{"name":"Explanation: Returns the total number of elements in the RDD."}]},
                        {"name": "take(n)", "children":[{"name":"Explanation: Returns the first `n` elements from the RDD to the driver as a list."}]},
                        {"name": "first()", "children":[{"name":"Explanation: A shortcut for `take(1)[0]`, it returns the very first element of the RDD."}]},
                        {"name": "reduce(lambda a, b: a + b)", "children":[{"name":"Explanation: Aggregates all elements of the RDD using a specified commutative and associative function, returning the final result to the driver."}]},
                        {"name": "saveAsTextFile('path')", "children":[{"name":"Explanation: Saves the content of the RDD as a set of text files in a specified directory. Each partition of the RDD will be saved as a separate file (`part-00000`, `part-00001`, etc.)."}]}
                    ]
                },
                {
                    "name": "Persistence",
                    "children": [
                        {
                            "name":"rdd.cache()",
                            "children":[
                                {"name":"Explanation: A shortcut for `rdd.persist(StorageLevel.MEMORY_ONLY)`. It stores the RDD partitions in the memory of the executors. If an RDD is used multiple times in an application, caching it can provide a significant performance boost by avoiding recomputation."},
                                {"name":"Example 1: Caching a filtered RDD", "code": "logs_rdd = sc.textFile(\"server.log\")\nerrors_rdd = logs_rdd.filter(lambda line: \"ERROR\" in line)\nerrors_rdd.cache()\n\n# First action: Triggers computation and caching\nprint(f\"Number of errors: {errors_rdd.count()}\")\n\n# Second action: Reuses the cached RDD, much faster\nfor error_line in errors_rdd.take(5):\n    print(error_line)"},
                                {"name":"Example 2: Caching after a shuffle", "code": "word_counts_rdd = sc.textFile(\"book.txt\") \\\n    .flatMap(lambda line: line.split()) \\\n    .map(lambda word: (word, 1)) \\\n    .reduceByKey(lambda a, b: a + b)\n\nword_counts_rdd.cache() # Cache after the expensive reduceByKey\n\n# Use the cached RDD multiple times\nprint(f\"Total unique words: {word_counts_rdd.count()}\")\nprint(f\"Top 10 words: {word_counts_rdd.takeOrdered(10, key=lambda x: -x[1])}\")"}
                            ]
                        },
                        {
                            "name":"rdd.persist(StorageLevel.MEMORY_AND_DISK)",
                            "children":[
                                {"name":"Explanation: Allows you to persist the RDD with a specific storage level. This gives you more control over how the data is stored. Common levels include `MEMORY_ONLY`, `MEMORY_AND_DISK`, `MEMORY_ONLY_SER` (serialized), `DISK_ONLY`, and replicated versions like `MEMORY_ONLY_2` (stores on two nodes)."},
                                {"name":"Example 1: Using MEMORY_AND_DISK for large RDDs", "code": "# RDD might be too large to fit entirely in memory\nlarge_rdd = sc.parallelize(range(10000000))\nfrom pyspark.storagelevel import StorageLevel\nlarge_rdd.persist(StorageLevel.MEMORY_AND_DISK)\n\n# Spark will store as many partitions in memory as possible,\n# and spill the rest to disk.\nprint(large_rdd.count()) # Action triggers persistence\nprint(large_rdd.sum()) # Reuses persisted data"},
                                {"name":"Example 2: Using DISK_ONLY for fault tolerance", "code": "# Useful for very long lineage chains where re-computation would be slow\nfrom pyspark.storagelevel import StorageLevel\ncomplex_rdd = ... # a very complex set of transformations\ncomplex_rdd.persist(StorageLevel.DISK_ONLY)\n\n# Now, even if the executor fails, the data can be recovered from disk\n# without re-running the entire transformation chain.\nresult = complex_rdd.collect()"}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "DataFrame API: Core Operations",
            "children": [
                 {
                    "name": "Creating DataFrames",
                    "children": [
                        {
                            "name": "spark.createDataFrame(data, schema)",
                            "children": [
                                {"name":"Explanation: Creates a DataFrame from a local Python collection, such as a list of lists, tuples, or `Row` objects. Providing a schema is recommended for performance and data type correctness."},
                                {"name": "Example 1: From a list of tuples with schema inference", "code": "data = [('Alice', 34), ('Bob', 45), ('Charlie', 29)]\ncolumns = ['name', 'age']\ndf = spark.createDataFrame(data, columns)\ndf.show()"},
                                {"name": "Example 2: From a list of rows with an explicit schema", "code": "from pyspark.sql.types import StructType, StructField, StringType, IntegerType\nfrom pyspark.sql import Row\n\nschema = StructType([\n    StructField(\"name\", StringType(), True),\n    StructField(\"age\", IntegerType(), True)\n])\ndata = [Row(name='Alice', age=34), Row(name='Bob', age=45)]\ndf = spark.createDataFrame(data, schema)\ndf.printSchema()"}
                            ]
                        },
                        {
                            "name": "spark.read.csv('path')",
                            "children": [
                                {"name":"Explanation: Reads data from an external source into a DataFrame. The DataFrameReader (`spark.read`) supports many formats like csv, json, parquet, orc, jdbc, etc."},
                                {"name": "Example 1: Reading a CSV with options", "code": "df_csv = spark.read.csv('employees.csv', header=True, inferSchema=True)\ndf_csv.show()"},
                                {"name": "Example 2: Reading a Parquet file (columnar format)", "code": "# Parquet is often preferred for performance as it includes the schema\ndf_parquet = spark.read.parquet('users.parquet')\ndf_parquet.printSchema()"}
                            ]
                        }
                    ]
                },
                {
                    "name": "Inspecting Data",
                    "children": [
                        {"name": "df.show(5, truncate=False)", "children":[{"name":"Explanation: Displays the first `n` rows of the DataFrame in a tabular format. `truncate=False` prevents long string values from being cut off. `vertical=True` is useful for tables with many columns."}]},
                        {"name": "df.printSchema()", "children":[{"name":"Explanation: Prints the schema of the DataFrame, showing column names, their data types (e.g., StringType, IntegerType), and whether they can contain null values."}]},
                        {"name": "df.columns", "children":[{"name":"Explanation: Returns a Python list containing all the column names of the DataFrame."}]},
                        {"name": "df.count()", "children":[{"name":"Explanation: An action that returns the total number of rows in the DataFrame."}]},
                        {"name": "df.describe().show()", "children":[{"name":"Explanation: Computes basic statistical summaries for all numerical and string columns. For numerical columns, it includes count, mean, standard deviation, min, and max. For string columns, it shows count, min, max."}]},
                        {"name": "df.summary().show()", "children":[{"name":"Explanation: An enhanced version of `describe()` that allows for custom statistics. By default, it computes count, mean, stddev, min, approximate percentiles (25%, 50%, 75%), and max for numerical columns."}]}
                    ]
                },
                {
                    "name": "Selecting, Renaming, & Dropping",
                    "children": [
                        {
                            "name": "df.select('col1', 'col2')", "children": [
                                {"name": "Explanation: Creates a new DataFrame containing only the specified columns."},
                                {"name": "Example 1: Basic selection", "code": "employee_df.select('FirstName', 'Salary').show()"},
                                {"name": "Example 2: Selection with expression", "code": "from pyspark.sql import functions as F\nemployee_df.select('FirstName', F.col('Salary') * 1.1).show()"}
                            ]
                        },
                        {
                            "name": "df.withColumnRenamed('old_name', 'new_name')", "children": [
                                {"name": "Explanation: Returns a new DataFrame with a column renamed."},
                                {"name": "Example 1: Renaming a single column", "code": "renamed_df = employee_df.withColumnRenamed('Salary', 'AnnualSalary')\nrenamed_df.columns"},
                                {"name": "Example 2: Chaining renames", "code": "chained_df = employee_df \\\n    .withColumnRenamed('FirstName', 'first_name') \\\n    .withColumnRenamed('LastName', 'last_name')\nchained_df.show()"}
                            ]
                        },
                        {
                            "name": "df.drop('col1')", "children": [
                                {"name": "Explanation: Returns a new DataFrame with the specified column(s) removed."},
                                {"name": "Example 1: Dropping a single column", "code": "no_dept_df = employee_df.drop('DepartmentID')\nno_dept_df.columns"},
                                {"name": "Example 2: Dropping multiple columns", "code": "minimal_df = employee_df.drop('DepartmentID', 'HireDate')\nminimal_df.show()"}
                            ]
                        },
                        {
                            "name": "Combined Example", "children": [
                                {"name": "Selecting, renaming, and dropping in one chain", "code": "from pyspark.sql import functions as F\n\n# Assume df has columns: 'user_id', 'product_name', 'price', 'purchase_ts'\n\nfinal_df = df.select(\n        F.col('user_id'), \n        F.col('product_name'), \n        F.col('price')\n    ) \\\n    .withColumnRenamed('user_id', 'customer_id') \\\n    .withColumnRenamed('product_name', 'item')\n\nfinal_df.show()"}
                            ]
                        }
                    ]
                },
                {
                    "name": "Filtering & Sorting",
                    "children": [
                        {
                            "name": "df.filter(df['age'] > 21) or df.where(\"country = 'USA'\")", "children": [
                                {"name": "Explanation: `filter()` and `where()` are aliases for the same operation. They return a new DataFrame containing only the rows that satisfy the given condition. You can use either column-based expressions (e.g., `df['age'] > 21`) or SQL-style strings (e.g., `\"country = 'USA'\"`)."},
                                {"name": "Example 1 (Column Expression): Filtering sales data", "code": "high_value_sales = sales_df.filter((sales_df['amount'] > 1000) & (sales_df['region'] == 'West'))\nhigh_value_sales.show()"},
                                {"name": "Example 2 (SQL String): Filtering user data", "code": "active_users_df = users_df.where(\"status = 'active' AND last_login >= '2023-01-01'\")\nactive_users_df.show()"}
                            ]
                        },
                        {
                            "name": "df.sort('age', ascending=False) or df.orderBy(F.col('age').desc())", "children": [
                                {"name": "Explanation: `sort()` and `orderBy()` are also aliases. They return a new DataFrame with rows sorted by the specified column(s). You can specify ascending or descending order."},
                                {"name": "Example 1 (Simple Sort): Sorting employees by salary", "code": "highest_paid_df = employees_df.sort('salary', ascending=False)\nhighest_paid_df.show(5)"},
                                {"name": "Example 2 (Multi-column Sort): Sorting products by category then price", "code": "from pyspark.sql import functions as F\nproducts_sorted_df = products_df.orderBy(F.col('category').asc(), F.col('price').desc())\nproducts_sorted_df.show()"}
                            ]
                        },
                         {
                            "name": "Combined Example", "children": [
                                {"name": "Filtering and then sorting the results", "code": "from pyspark.sql import functions as F\n\n# Find all employees in the 'Engineering' department and sort them by hire date\nengineers_by_date = employees_df \\\n    .filter(F.col('department') == 'Engineering') \\\n    .orderBy(F.col('hire_date').asc())\n\nengineers_by_date.show()"}
                            ]
                        }
                    ]
                },
                {
                    "name": "Adding & Modifying Columns",
                    "children": [
                        {
                            "name": "df.withColumn('new_col', expression)", "children": [
                                {"name": "Explanation: This is the primary method for adding a new column or replacing an existing one. It returns a new DataFrame with the added/modified column. The second argument is a Column expression that defines the new column's values."},
                                {"name": "Example 1: Adding a column with a bonus calculation", "code": "from pyspark.sql import functions as F\ndf_with_bonus = employees_df.withColumn('bonus', F.col('salary') * 0.1)\ndf_with_bonus.show()"},
                                {"name": "Example 2: Modifying an existing column (e.g., converting case)", "code": "df_upper_case = employees_df.withColumn('name', F.upper(F.col('name')))\ndf_upper_case.show()"}
                            ]
                        },
                         {
                            "name": "F.when(condition, val1).otherwise(val2)", "children": [
                                {"name": "Explanation: This function is Spark's equivalent of an IF/ELSE statement. It's used inside `withColumn` to create a new column based on conditional logic. You can chain multiple `.when()` calls for more complex logic (like a CASE WHEN statement in SQL)."},
                                {"name": "Example 1: Creating a seniority level column", "code": "from pyspark.sql import functions as F\ndf_seniority = employees_df.withColumn('seniority', \n    F.when(F.col('years_experience') >= 10, 'Senior')\n     .when(F.col('years_experience') >= 5, 'Mid-Level')\n     .otherwise('Junior')\n)\ndf_seniority.show()"},
                                {"name": "Example 2: Flagging high-priority orders", "code": "from pyspark.sql import functions as F\ndf_priority = orders_df.withColumn('is_priority', \n    F.when((F.col('order_total') > 500) | (F.col('customer_type') == 'Premium'), True)\n     .otherwise(False)\n)\ndf_priority.show()"}
                            ]
                        }
                    ]
                },
                {
                    "name": "Handling Duplicates",
                    "children": [
                        {
                            "name": "df.distinct()",
                            "children":[
                                {"name":"Explanation: Returns a new DataFrame containing only the unique rows from the original DataFrame. It considers all columns to determine uniqueness."},
                                {"name": "Example 1: Getting distinct rows from a simple dataset", "code": "data = [('A', 1), ('B', 2), ('A', 1), ('C', 3)]\ndf = spark.createDataFrame(data, ['letter', 'number'])\ndf.distinct().show() # Shows ('A', 1), ('B', 2), ('C', 3)"},
                                {"name": "Example 2: Counting distinct users", "code": "# event_logs_df might have multiple rows per user\ndistinct_users = event_logs_df.select('user_id').distinct()\nprint(f\"Total distinct users: {distinct_users.count()}\")"}
                            ]
                        },
                        {
                            "name": "df.dropDuplicates(['col1', 'col2'])",
                            "children":[
                                {"name":"Explanation: Returns a new DataFrame where duplicate rows are dropped based on a specified subset of columns. If no columns are specified, it behaves exactly like `distinct()`."},
                                {"name": "Example 1: Dropping duplicates based on name", "code": "data = [('Alice', 'HR', 1), ('Bob', 'IT', 2), ('Alice', 'Sales', 3)]\ndf = spark.createDataFrame(data, ['name', 'dept', 'id'])\n# Keep the first occurrence of each name\ndf.dropDuplicates(['name']).show()"},
                                {"name": "Example 2: Getting the latest record for each product", "code": "# Assuming df has product_id, price, and timestamp\n# We want the most recent price for each product\nlatest_prices_df = df.orderBy(F.col('timestamp').desc()).dropDuplicates(['product_id'])\nlatest_prices_df.show()"}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "pyspark.sql.functions In-Depth",
            "children": [
                 {
                     "name": "Column & Expression Functions",
                     "children": [
                         {"name":"col(), column()", "children":[{"name":"Explanation: Selects a column from a DataFrame by name."}]},
                         {"name":"lit()", "children":[{"name":"Explanation: Creates a Column of literal value."}]},
                         {"name":"expr()", "children":[{"name":"Explanation: Parses a SQL expression string into a Column."}]},
                         {"name":"broadcast()", "children":[{"name":"Explanation: Hints to Spark that a DataFrame should be broadcasted when used in a join."}]}
                     ]
                 },
                 {
                     "name": "Null & Conditional Functions",
                     "children": [
                         {"name":"coalesce()", "children":[{"name":"Explanation: Returns the first non-null value from a set of columns."}]},
                         {"name":"when() / otherwise()", "children":[{"name":"Explanation: Provides if-then-else conditional logic."}]},
                         {"name":"isnull(), isnotnull()", "children":[{"name":"Explanation: Returns true if the column is null or not null, respectively."}]},
                         {"name":"nvl()", "children":[{"name":"Explanation: A two-argument version of coalesce, returns the second value if the first is null."}]}
                     ]
                 },
                 {
                     "name": "Aggregate Functions",
                     "children": [
                        {"name":"df.groupBy('dept').agg(F.sum('salary').alias('total_salary'))", "children":[{"name":"Explanation: Used with `groupBy` or `agg` to perform calculations on a group of rows and return a single value."}]},
                        {"name":"count(), countDistinct()", "children":[{"name":"Explanation: `count` returns the number of items in a group. `countDistinct` returns the number of unique items."}]},
                        {"name":"avg(), mean()", "children":[{"name":"Explanation: Both calculate the average value of a column within a group."}]},
                        {"name":"sum(), sumDistinct()", "children":[{"name":"Explanation: `sum` calculates the total value of a column. `sumDistinct` calculates the sum of only the unique values."}]},
                        {"name":"min(), max()", "children":[{"name":"Explanation: Find the minimum and maximum values in a column within a group."}]},
                        {"name":"collect_list(), collect_set()", "children":[{"name":"Explanation: Collects all values from a group into an array. `collect_list` keeps all values, `collect_set` keeps unique values."}]},
                        {"name":"variance(), stddev()", "children":[{"name":"Explanation: Calculate the variance and standard deviation of a group."}]},
                        {"name":"kurtosis(), skewness()", "children":[{"name":"Explanation: Compute the kurtosis and skewness of a group, measuring tail extremity and symmetry of the distribution."}]},
                        {"name":"corr(), covar_pop(), covar_samp()", "children":[{"name":"Explanation: Compute the correlation, population covariance, and sample covariance between two columns."}]}
                    ]
                 },
                {
                    "name": "Window Functions",
                    "children": [
                        {"name":"from pyspark.sql.window import Window", "children":[{"name":"Explanation: Window functions perform a calculation across a set of table rows that are somehow related to the current row."}]},
                        {"name":"windowSpec = Window.partitionBy('dept').orderBy('salary')", "children":[{"name":"Explanation: Defines the 'window' or group of rows. `partitionBy` creates groups, and `orderBy` sorts rows within them."}]},
                        {"name":"row_number(), rank(), dense_rank()", "children":[{"name":"Explanation: `row_number()` gives a unique number. `rank()` gives same rank for ties with a gap. `dense_rank()` gives same rank for ties with no gap."}]},
                        {"name":"percent_rank(), ntile(n)", "children":[{"name":"Explanation: `percent_rank` calculates the relative rank. `ntile(n)` splits rows into `n` ranked groups."}]},
                        {"name":"lag(col, offset), lead(col, offset)", "children":[{"name":"Explanation: `lag` accesses a previous row's value. `lead` accesses a subsequent row's value."}]}
                    ]
                },
                {
                    "name": "String Functions",
                    "children": [
                        {"name":"concat_ws('-', F.col('first'), F.col('last'))", "children":[{"name":"Explanation: Concatenates multiple string columns with a specified delimiter."}]},
                        {"name":"split(col, pattern), array_join(array, delimiter)", "children":[{"name":"Explanation: `split` divides a string into an array. `array_join` does the opposite."}]},
                        {"name":"upper(col), lower(col), initcap(col)", "children":[{"name":"Explanation: Convert a string column to upper case, lower case, or title case."}]},
                        {"name":"trim(col), ltrim(col), rtrim(col)", "children":[{"name":"Explanation: Remove whitespace from both, left, or right sides of a string."}]},
                        {"name":"substring(col, pos, len)", "children":[{"name":"Explanation: Extracts a substring of a specified length starting at a given position."}]},
                        {"name":"regexp_replace(col, pattern, replacement)", "children":[{"name":"Explanation: Replaces substrings that match a regular expression."}]},
                        {"name":"rlike(str, regexp)", "children":[{"name":"Explanation: A boolean function that returns true if the string matches the regular expression."}]}
                    ]
                },
                {
                    "name": "Date & Timestamp Functions",
                    "children": [
                        {"name":"current_date(), current_timestamp()", "children":[{"name":"Explanation: Returns the current date or timestamp at the start of the query."}]},
                        {"name":"to_date(col, format), to_timestamp(col, format)", "children":[{"name":"Explanation: Parses a string column into a Date or Timestamp Type."}]},
                        {"name":"date_format(col, format)", "children":[{"name":"Explanation: Converts a date/timestamp into a string with a specified format."}]},
                        {"name":"datediff(end, start), months_between(end, start)", "children":[{"name":"Explanation: Returns the difference in days or months between two dates."}]},
                        {"name":"date_add(col, days), date_sub(col, days), add_months(col, months)", "children":[{"name":"Explanation: Adds or subtracts days or months from a date."}]},
                        {"name":"year(), month(), dayofmonth(), weekofyear(), quarter()", "children":[{"name":"Explanation: Extracts the specified unit from a date/timestamp."}]},
                        {"name":"trunc(date, format), date_trunc(format, timestamp)", "children":[{"name":"Explanation: Truncates a date or timestamp to a specified unit (e.g., 'year', 'month')."}]}
                    ]
                },
                {
                    "name": "Array & Map Functions",
                    "children": [
                        {"name":"explode(col), posexplode(col)", "children":[{"name":"Explanation: `explode` creates a new row for each element in an array. `posexplode` also includes the element's position."}]},
                        {"name":"array_contains(col, value)", "children":[{"name":"Explanation: Returns true if the array column contains the specified value."}]},
                        {"name":"size(col)", "children": [{"name": "Explanation: Returns the length of an array or map column."}]},
                        {"name":"flatten(col)", "children": [{"name": "Explanation: Flattens an array of arrays into a single array."}]},
                        {"name":"arrays_zip(col1, col2)", "children":[{"name":"Explanation: Creates an array of structs combining elements from input arrays."}]},
                        {"name":"map_keys(col), map_values(col)", "children":[{"name":"Explanation: Returns an array containing the keys or values of a map."}]}
                    ]
                },
                {
                    "name": "Mathematical Functions",
                    "children": [
                        {"name":"round(), floor(), ceil()", "children":[{"name":"Explanation: Standard rounding functions for numerical columns."}]},
                        {"name":"abs()", "children":[{"name":"Explanation: Computes the absolute value."}]},
                        {"name":"sqrt(), pow(base, exp)", "children":[{"name":"Explanation: Computes the square root or raises a number to a power."}]},
                        {"name":"log(), log10(), exp()", "children":[{"name":"Explanation: Computes natural log, base-10 log, and Euler's number `e` raised to a power."}]}
                    ]
                },
                {
                    "name": "JSON Functions",
                    "children": [
                        {"name":"get_json_object(col, path)", "children":[{"name":"Explanation: Extracts a JSON object from a JSON string based on a JSON path."}]},
                        {"name":"from_json(col, schema)", "children":[{"name":"Explanation: Parses a JSON string column into a struct or array with a given schema."}]},
                        {"name":"to_json(col)", "children":[{"name":"Explanation: Converts a struct or array column into a JSON string."}]}
                    ]
                },
                 {
                    "name": "Special & Utility Functions",
                    "children": [
                        {"name":"monotonically_increasing_id()", "children":[{"name":"Explanation: Generates a globally unique and monotonically increasing 64-bit integer ID. Not guaranteed to be consecutive."}]},
                        {"name":"spark_partition_id()", "children":[{"name":"Explanation: Returns the ID of the Spark partition the row belongs to."}]},
                        {"name":"input_file_name()", "children":[{"name":"Explanation: Returns the name of the file the row was read from."}]},
                         {"name":"uuid()", "children":[{"name":"Explanation: Generates a universally unique identifier string."}]}
                    ]
                }
            ]
        },
        {
            "name": "Advanced Operations",
            "children": [
                { "name": "Joins", "children": [
                    {"name": "df_A.join(df_B, df_A.id == df_B.id, 'inner')", "children": [{"name": "Explanation: Merges two DataFrames based on a join condition. The third argument specifies the join type."}]},
                    {"name": "Join Types", "children": [{"name":"- **inner**: Default. Keeps rows with keys that exist in both DataFrames.\n- **outer**: Keeps all rows from both DataFrames, filling with nulls where keys don't match.\n- **left** (or **left_outer**): Keeps all rows from the left DataFrame.\n- **right** (or **right_outer**): Keeps all rows from the right DataFrame.\n- **left_semi**: Like an inner join, but only returns columns from the left DataFrame.\n- **left_anti**: Returns rows from the left DataFrame that do NOT have a match in the right DataFrame."}]}
                ]},
                { "name": "Complex Aggregations", "children": [
                    {"name":"df.cube('col1', 'col2').count()", "children":[{"name":"Explanation: Creates aggregations for all possible combinations of the grouping columns. For ('col1', 'col2'), it would calculate aggregations for (col1, col2), (col1), (col2), and an overall total."}]},
                    {"name":"df.rollup('col1', 'col2').count()", "children":[{"name":"Explanation: Creates hierarchical subtotals from left to right. For ('col1', 'col2'), it would calculate aggregations for (col1, col2), (col1), and an overall total, but NOT for (col2) alone."}]}
                ]},
                { "name": "Pivoting", "children": [{"name":"df.groupBy('dept').pivot('year').sum('sales')", "children":[{"name":"Explanation: Rotates a table by turning unique values from one column (the pivot column, 'year' here) into their own separate columns. It requires an aggregate function to be specified."}]}]},
                { "name": "User-Defined Functions (UDFs)", "children": [
                    {"name":"from pyspark.sql.functions import udf", "children":[{"name":"Explanation: UDFs allow you to define your own custom functions in Python and apply them to DataFrame columns. While powerful, they should be used as a last resort because Spark cannot optimize the Python code, leading to slower performance compared to native Spark functions. It involves serializing data between the JVM and Python, which is expensive."}]},
                    {"name":"@udf(StringType()) def my_udf(s): return s.upper()", "children":[{"name":"Explanation: The `@udf` decorator is used to register a Python function as a UDF. You must specify the return data type (e.g., `StringType()`, `IntegerType()`) for Spark to understand the schema."}]},
                    {"name":"df.withColumn('upper_name', my_udf(df.name))", "children":[{"name":"Explanation: Once registered, the UDF can be called just like any other Spark function on a column."}]}
                ]}
            ]
        },
         {
            "name": "Performance Tuning & Optimization",
            "children": [
                { "name": "Understanding the Spark UI", "children": [
                    {"name": "Jobs", "children":[{"name":"Shows a list of all jobs (triggered by actions) in your application. Useful for getting a high-level overview and identifying long-running actions."}]},
                    {"name": "Stages", "children":[{"name":"Drills down into a job to show its stages. A high number of stages often indicates multiple shuffles. Look for stages with long run times or high data shuffle."}]},
                    {"name": "Tasks", "children":[{"name":"Shows individual tasks within a stage. The summary statistics here can help identify data skew (if some tasks take much longer than the median)."}]}
                ]},
                { "name": "Partitioning", "children": [
                    {"name": "spark.sql.shuffle.partitions", "children":[{"name":"Explanation: The most crucial tuning parameter. It controls the number of partitions that are created after a shuffle operation (like a `groupBy` or `join`). Too few partitions can lead to memory issues and lack of parallelism. Too many can create excessive overhead."}]},
                    {"name": "df.repartition(num, col)", "children": [{"name":"Explanation: Performs a full shuffle of the data to create a specific number of partitions. Can be used to increase or decrease partitions. Partitioning by a column (`col`) is often used to optimize subsequent joins on that same column."}]},
                    {"name": "df.coalesce(num)", "children": [{"name":"Explanation: An optimized way to *decrease* the number of partitions. It avoids a full shuffle by combining existing partitions on the same executor, making it much more efficient than `repartition` for this purpose."}]}
                ]},
                { "name": "Caching / Persistence", "children": [
                    {"name": "df.cache()", "children": [{"name":"Explanation: A shorthand for `df.persist(StorageLevel.MEMORY_ONLY)`. It's a directive to Spark to store the DataFrame in memory after it's first computed."}]},
                    {"name": "df.persist()", "children": [{"name":"Explanation: Use when a DataFrame is used multiple times in your code, especially after an expensive transformation. Caching it avoids re-computation. Always remember to call `.unpersist()` on the DataFrame when you are finished with it to free up memory."}]}
                ]},
                { "name": "Broadcast Joins", "children": [
                    {"name": "Scenario: Joining a large DataFrame with a small one.", "children":[{"name":"Explanation: The default join strategy is a shuffle join, which is expensive. If one DataFrame is small enough to fit in the memory of each executor, a broadcast join is much more efficient."}]},
                    {"name": "F.broadcast(small_df).join(large_df, ...)", "children":[{"name":"Explanation: Spark's optimizer often performs this automatically based on the `spark.sql.autoBroadcastJoinThreshold` setting. However, you can explicitly hint to Spark using the `F.broadcast()` function to broadcast the small DataFrame to all executors, avoiding the shuffle of the large DataFrame."}]}
                ]},
                { "name": "Handling Data Skew", "children": [
                    {"name": "What is it?", "children":[{"name":"Data skew occurs when data is unevenly distributed across partitions. For example, in a `groupBy('city')` operation, the partition for 'New York' might be massive while the one for 'Omaha' is tiny. This causes the task processing the 'New York' partition to become a bottleneck, slowing down the entire stage."}]},
                    {"name": "Salting", "children":[{"name":"Explanation: A common technique to mitigate skew. It involves adding a random key (the 'salt') to the skewed keys. For example, instead of joining on `user_id`, you join on `concat(user_id, '_', floor(rand() * N))`. This distributes the data for the skewed key across `N` different partitions, allowing for parallel processing."}]}
                ]},
                { "name": "Adaptive Query Execution (AQE)", "children": [
                    {"name": "spark.sql.adaptive.enabled = True", "children":[{"name":"Explanation: A powerful optimization framework in Spark 3.x that adjusts query plans at runtime based on the actual data statistics. It can dynamically coalesce shuffle partitions, switch join strategies (e.g., from shuffle sort-merge to broadcast hash join), and optimize joins with data skew."}]}
                ]}
            ]
        },
        {
            "name": "Structured Streaming",
            "children": [
                { "name": "Core Concepts", "children": [
                    {"name": "Unbounded Table Model", "children": [{"name":"The fundamental idea of Structured Streaming is to treat a live data stream as a table that is continuously being appended to. This allows you to apply the same DataFrame API operations (select, filter, groupBy, etc.) to streaming data as you would to static data."}]},
                    {"name": "Micro-batch Processing", "children":[{"name":"The engine processes streaming data in small, discrete batches. It periodically checks the streaming source and runs a batch query on any new data that has arrived since the last batch. This provides end-to-end exactly-once fault tolerance guarantees."}]}
                ]},
                { "name": "Reading & Writing Streams", "children": [
                    {"name": "readStream", "children": [{"name":"The entry point for reading streaming data, e.g., `spark.readStream.format('kafka')...load()`."}]},
                    {"name": "writeStream", "children": [{"name":"The entry point for writing streaming data to a sink, e.g., `df.writeStream.format('parquet').outputMode('append').start('path')`."}]},
                    {"name": "Sources & Sinks", "children": [{"name":"Common sources (inputs) and sinks (outputs) include Kafka, Kinesis, Event Hubs, and file systems (CSV, JSON, Parquet, Delta Lake). Special sinks like 'console' and 'memory' are available for debugging."}]}
                ]},
                { "name": "Windowing & Watermarking", "children": [
                    {"name": "Tumbling Windows", "children": [{"name":"Grouping data into fixed-size, non-overlapping time windows, e.g., `F.window('event_time', '5 minutes')` to count events every 5 minutes."}]},
                    {"name": "Watermarking", "children": [{"name":"`df.withWatermark('event_time', '10 minutes')`. A watermark is a mechanism that tells the streaming engine how late to expect data to arrive. It allows the engine to manage and clean up old state for windowed aggregations, which is crucial for long-running streams."}]}
                ]}
            ]
        },
        {
            "name": "Machine Learning with MLlib",
            "children": [
                { "name": "MLlib Concepts", "children": [
                    {"name": "Based on the DataFrame API.", "children": [{"name":"Modern MLlib uses DataFrames as the primary data structure, allowing for easy integration with the rest of the Spark ecosystem."}]},
                    {"name": "Transformer", "children":[{"name":"An algorithm which can transform one DataFrame into another DataFrame. For example, a feature transformer that creates a new column, or a trained model that adds a prediction column."}]},
                    {"name": "Estimator", "children":[{"name":"An algorithm which can be fit on a DataFrame to produce a Transformer. For example, a classification algorithm like `LogisticRegression` is an Estimator. When you call its `.fit()` method, it produces a `LogisticRegressionModel`, which is a Transformer."}]},
                    {"name": "Pipeline", "children":[{"name":"A `Pipeline` chains multiple Transformers and Estimators together to specify an ML workflow. This helps to ensure the same sequence of feature processing steps is applied to both training and test data."}]}
                ]},
                { "name": "Feature Engineering", "children": [
                    {"name": "VectorAssembler", "children":[{"name":"A crucial transformer that combines a list of columns into a single vector column, which is the required input format for most MLlib algorithms."}]},
                    {"name": "StringIndexer", "children":[{"name":"An estimator that converts a column of string labels into a column of numerical indices."}]},
                    {"name": "OneHotEncoder", "children":[{"name":"A transformer that maps a column of label indices to a column of binary vectors, with at most a single one-value."}]},
                    {"name": "StandardScaler", "children":[{"name":"An estimator that scales features to have zero mean and unit standard deviation."}]}
                ]},
                { "name": "Modeling & Evaluation", "children": [
                    {"name": "Classification", "children":[{"name":"Algorithms: `LogisticRegression`, `DecisionTreeClassifier`, `RandomForestClassifier`, `GradientBoostedTreeClassifier`"}]},
                    {"name": "Regression", "children":[{"name":"Algorithms: `LinearRegression`, `GeneralizedLinearRegression`, `DecisionTreeRegressor`"}]},
                    {"name": "Clustering", "children":[{"name":"Algorithms: `KMeans`, `LDA`, `GaussianMixture`"}]},
                    {"name": "Evaluators", "children":[{"name":"Tools to assess model performance, e.g., `BinaryClassificationEvaluator` (for AUC), `MulticlassClassificationEvaluator` (for F1-score, accuracy), `RegressionEvaluator` (for RMSE)."}]}
                ]}
            ]
        },
        {
            "name": "Ecosystem & Deployment",
            "children": [
                { "name": "Delta Lake", "children": [{"name":"An open-source storage layer that brings ACID transactions, scalable metadata handling, and time travel (data versioning) capabilities to Spark. It's built on top of Parquet and is designed to build reliable and performant data lakes."}]},
                { "name": "MLflow", "children": [{"name":"An open-source platform for managing the complete machine learning lifecycle. It includes tools for tracking experiments, packaging code into reproducible runs, and sharing and deploying models."}]},
                { "name": "Deployment", "children": [
                    {"name": "Local Mode", "children":[{"name":"Runs Spark on a single machine. Ideal for development and testing."}]},
                    {"name": "Standalone Cluster", "children":[{"name":"A simple cluster manager included with Spark. Good for small, dedicated clusters."}]},
                    {"name": "YARN / Kubernetes", "children":[{"name":"Robust, production-grade cluster managers that allow Spark to share resources with other applications in a large-scale environment."}]},
                    {"name": "Cloud Platforms", "children":[{"name":"Managed services that simplify the process of deploying and scaling Spark clusters, such as Databricks, AWS EMR, Google Cloud Dataproc, and Azure Synapse Analytics."}]}
                ]}
            ]
        }
    ]
};


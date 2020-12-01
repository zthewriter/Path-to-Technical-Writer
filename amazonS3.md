## AWS Cloud S3 Investigation

Amazon AWS provides a file storage solution called S3. In S3 users can make buckets that store objects. These objects are files. Files can be documents, PDFs, photos, and much more. 

This past week I utilized Amazon S3 for the first time. At the beginning of my experience, I expected S3 to be similar to services such as Google Cloud and Microsoft OneDrive. Throughout my experience, I discovered that although these services provide similar core offerings to users, they are quite different in many ways. This article will focus specifically on how S3 operates. Future articles will be available on Google Cloud and Microsoft OneDrive. 

### Buckets 

Amazon S3 offers users the opportunity to create Buckets. These Buckets function as an environment to store files. Users can create multiple Buckets. 

### Objects 

Objects exist within Buckets in Amazon S3. They can be documents, photos, videos and much more. 

### ACL (Access Control List)

Each Object within a Bucket has an Access Control List (ACL). This setting determines which user has access to READ and WRITE an object. The Object owner will automatically have access to READ and WRITE an Object. Although public access to READ an Object can be granted by the Object owner, a REST API is needed to grant WRITE access to an Object within a Bucket. This can be granted by the Object owner. 

### Conclusion

The above discoveries were made from a priliminary investigation of Amazon S3. Further investigating to come in the future! 


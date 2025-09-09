# Client
1. To start client go to AngularClient folder and run:
ng serve 
Note: you have to have Angular installed

#########################

2. Batch Job Architecture (ECS or Lambda)
ECS Approach:
Use AWS ECS Fargate to run containerized batch jobs.
The /run-risk-job API triggers an ECS task via AWS SDK.
ECS task pulls borrower data from a source (e.g., RDS, S3, API), processes it, and stores results (e.g., S3, DynamoDB).
Use CloudWatch Events or Step Functions for orchestration and monitoring.

Lambda Approach:
The API triggers an AWS Lambda function.
Lambda pulls borrower data, processes it, and stores results.
For large jobs, use Step Functions to chain Lambdas or SQS for batching.

3. Retry Logic, Error Handling, and UI Feedback
Backend:
Implement retries using AWS SDK (e.g., exponential backoff).
Use Dead Letter Queues (DLQ) for failed jobs (SQS or Lambda).
Log errors to CloudWatch.

Frontend:
Show loading state while job is running.
Display success or error messages.
Optionally, poll for job status if it's asynchronous.

4. API Security (Cognito or IAM)
AWS Cognito:
Protect the API with Cognito User Pools.
Angular app authenticates users via Cognito and attaches JWT tokens to API requests.
Backend validates JWT tokens.

IAM-based Auth:
Use IAM roles for service-to-service authentication.
For user-facing APIs, Cognito is preferred.
Implementation Example (Angular):

Use @aws-amplify/auth or similar to authenticate and attach tokens.
Backend checks Authorization header for valid JWT.

Summary:
Angular component triggers /run-risk-job and provides user feedback.
Batch job runs on ECS or Lambda, with retries and error handling.
API secured via Cognito JWT authentication.
**Acuvity A3S Setup Guide**

1. Git Clone the repo
2. Follow the instructions from a3-setup.md to install and setup a3s
3. Run `chmod +x start.sh` for premissions
4. `./start.sh` to generate and setup the application.

**5. Obtain tokens**
`export $MIKE=$(a3sctl auth mtls \
    --api https://127.0.0.1:44443 \
    --api-skip-verify \
    --source-name my-mtls-source \
    --source-namespace /myapp \
    --cert mike-cert.pem \
    --key mike-key.pem)`
`export $JOHN=$(a3sctl auth mtls \
    --api https://127.0.0.1:44443 \
    --api-skip-verify \
    --source-name my-mtls-source \
    --source-namespace /myapp \
    --cert john-cert.pem \
    --key john-key.pem)`

**Test Case 1: Mike accesses 'resource1' with GET**

`curl -k -v -H "Content-Type: application/json" \
-d "{
\"token\": \"$MIKE\",
\"resource\": \"resource1\",
\"action\": \"get\",
\"namespace\": \"/myapp\"
}" \
https://127.0.0.1:44443/authz`

**Test Case 2: Mike accesses 'resource2' with GET (Unauthorized)**

`curl -k -v -H "Content-Type: application/json" \
-d "{
\"token\": \"$MIKE\",
\"resource\": \"resource2\",
\"action\": \"get\",
\"namespace\": \"/myapp\"
}" \
https://127.0.0.1:44443/authz`

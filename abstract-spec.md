
#### Utxos

##### Asset

```
{
  "operation": "utxosAsset",
  "request": {
    "type": "object",
    "properties": {
      "asset_name": {
        "$ref": "#/cip-116/AssetName"
      },
      "minting_policy_hash": {
        "$ref": "#/cip-116/ScriptHash"
      }
    },
    "required": [
      "asset_name",
      "minting_policy_hash"
    ]
  },
  "response": {
    "type": "object",
    "properties": {
      "utxos": {
        "type": "array",
        "items": {
          "$ref": "#/cip-116/TransactionUnspentOutput"
        }
      }
    },
    "required": [
      "utxos"
    ]
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get all UTxOs that contain some of the specified asset

##### Transaction Hash

```
{
  "operation": "utxosTransactionHash",
  "request": {
    "$ref": "#/cip-139/TransactionHash"
  },
  "response": {
    "type": "object",
    "properties": {
      "utxos": {
        "type": "array",
        "items": {
          "$ref": "#/cip-116/TransactionUnspentOutput"
        }
      }
    },
    "required": [
      "utxos"
    ]
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get all UTxOs produced by the transaction

##### Address

```
{
  "operation": "utxosAddress",
  "request": {
    "$ref": "#/cip-116/Address"
  },
  "response": {
    "type": "object",
    "properties": {
      "utxos": {
        "type": "array",
        "items": {
          "$ref": "#/cip-116/TransactionUnspentOutput"
        }
      }
    },
    "required": [
      "utxos"
    ]
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get all UTxOs present at the address

##### Payment Credential

```
{
  "operation": "utxosPaymentCredential",
  "request": {
    "$ref": "#/cip-116/Credential"
  },
  "response": {
    "type": "object",
    "properties": {
      "utxos": {
        "type": "array",
        "items": {
          "$ref": "#/cip-116/TransactionUnspentOutput"
        }
      }
    },
    "required": [
      "utxos"
    ]
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get all UTxOs present at the addresses which use the payment credential

##### Stake Credential

```
{
  "operation": "utxosStakeCredential",
  "request": {
    "$ref": "#/cip-116/RewardAddress"
  },
  "response": {
    "type": "object",
    "properties": {
      "utxos": {
        "type": "array",
        "items": {
          "$ref": "#/cip-116/TransactionUnspentOutput"
        }
      }
    },
    "required": [
      "utxos"
    ]
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get all UTxOs present at the addresses which use the stake credential

#### Block

##### Number

```
{
  "operation": "blockNumber",
  "request": {
    "$ref": "#/cip-139/UInt64"
  },
  "response": {
    "$ref": "#/cip-116/Block"
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get the block with the supplied block number

##### Hash

```
{
  "operation": "blockHash",
  "request": {
    "$ref": "#/cip-116/BlockHash"
  },
  "response": {
    "$ref": "#/cip-116/Block"
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get the block with the supplied block hash

#### Transaction

##### Hash

```
{
  "operation": "transactionHash",
  "request": {
    "$ref": "#/cip-139/TransactionHash"
  },
  "response": {
    "$ref": "#/cip-116/Transaction"
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get the transaction with the supplied transaction hash

##### Block Number

```
{
  "operation": "transactionBlockNumber",
  "request": {
    "$ref": "#/cip-139/UInt64"
  },
  "response": {
    "type": "object",
    "properties": {
      "transactions": {
        "type": "array",
        "items": {
          "$ref": "#/cip-116/Transaction"
        }
      }
    },
    "required": [
      "transactions"
    ]
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get all transactions contained in the block with the supplied block number []

##### Block Hash

```
{
  "operation": "transactionBlockHash",
  "request": {
    "$ref": "#/cip-116/BlockHash"
  },
  "response": {
    "type": "object",
    "properties": {
      "transactions": {
        "type": "array",
        "items": {
          "$ref": "#/cip-116/Transaction"
        }
      }
    },
    "required": [
      "transactions"
    ]
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get all transactions contained in the block with the supplied block hash

#### Datum

##### Hash

```
{
  "operation": "datumHash",
  "request": {
    "$ref": "#/cip-116/DataHash"
  },
  "response": {
    "$ref": "#/cip-116/PlutusData"
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get the datum that hashes to the supplied data hash

#### Plutus Script

##### Hash

```
{
  "operation": "plutusScriptHash",
  "request": {
    "$ref": "#/cip-116/ScriptHash"
  },
  "response": {
    "$ref": "#/cip-116/PlutusScript"
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get the plutus script that hashes to the supplied script hash

#### Native Script

##### Hash

```
{
  "operation": "nativeScriptHash",
  "request": {
    "$ref": "#/cip-116/ScriptHash"
  },
  "response": {
    "$ref": "#/cip-116/NativeScript"
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get the native script that hashes to the supplied script hash

#### Metadata

##### Transaction Hash

```
{
  "operation": "metadataTransactionHash",
  "request": {
    "$ref": "#/cip-139/TransactionHash"
  },
  "response": {
    "$ref": "#/cip-116/TransactionMetadatum"
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get the metadata present on the transaction with the supplied transaction hash

#### Protocol Parameters

##### Latest

```
{
  "operation": "protocolParametersLatest",
  "request": {},
  "response": {
    "$ref": "#/cip-139/ProtocolParams"
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get the latest protocol parameters

##### Epoch

```
{
  "operation": "protocolParametersEpoch",
  "request": {
    "$ref": "#/cip-139/UInt32"
  },
  "response": {
    "$ref": "#/cip-139/ProtocolParams"
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get the protocol parameters at the supplied epoch number

#### Votes

##### Cc Id

```
{
  "operation": "votesCcId",
  "request": {
    "$ref": "#/cip-139/CCHotId"
  },
  "response": {
    "type": "object",
    "properties": {
      "votes": {
        "type": "array",
        "items": {
          "$ref": "#/cip-139/VoteInfo"
        }
      }
    },
    "required": [
      "votes"
    ]
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Votes cast by the supplied cc credential

##### Spo Id

```
{
  "operation": "votesSpoId",
  "request": {
    "$ref": "#/cip-139/PoolPubKeyHash"
  },
  "response": {
    "type": "object",
    "properties": {
      "votes": {
        "type": "array",
        "items": {
          "$ref": "#/cip-139/VoteInfo"
        }
      }
    },
    "required": [
      "votes"
    ]
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Votes cast by the supplied stake pool operator

##### Drep Id

```
{
  "operation": "votesDrepId",
  "request": {
    "$ref": "#/cip-139/DRepId"
  },
  "response": {
    "type": "object",
    "properties": {
      "votes": {
        "type": "array",
        "items": {
          "$ref": "#/cip-139/VoteInfo"
        }
      }
    },
    "required": [
      "votes"
    ]
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Votes cast by the supplied DRep

##### Proposal Id

```
{
  "operation": "votesProposalId",
  "request": {
    "$ref": "#/cip-139/ProposalId"
  },
  "response": {
    "type": "object",
    "properties": {
      "votes": {
        "type": "array",
        "items": {
          "$ref": "#/cip-139/VoteInfo"
        }
      }
    },
    "required": [
      "votes"
    ]
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Votes cast on the supplied proposal

#### Drep

##### All

```
{
  "operation": "drepAll",
  "request": {},
  "response": {
    "type": "object",
    "properties": {
      "dreps": {
        "type": "array",
        "items": {
          "$ref": "#/cip-139/DRepInfo"
        }
      }
    },
    "required": [
      "dreps"
    ]
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get all the known DReps

##### Id

```
{
  "operation": "drepId",
  "request": {
    "$ref": "#/cip-139/DRepId"
  },
  "response": {
    "$ref": "#/cip-139/DRepInfo"
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get a specific DRep by id

##### Stake Credential

```
{
  "operation": "drepStakeCredential",
  "request": {
    "$ref": "#/cip-116/RewardAddress"
  },
  "response": {
    "$ref": "#/cip-139/DRepInfo"
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get the DRep that the stake credential has delegated to

#### Committee

##### All

```
{
  "operation": "committeeAll",
  "request": {},
  "response": {
    "type": "object",
    "properties": {
      "cc_members": {
        "type": "array",
        "items": {
          "$ref": "#/cip-139/CCMember"
        }
      }
    },
    "required": [
      "cc_members"
    ]
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get all known committee members

##### Id

```
{
  "operation": "committeeId",
  "request": {
    "$ref": "#/cip-139/CCHotId"
  },
  "response": {
    "$ref": "#/cip-139/CCMember"
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get a specific Committee member by id

#### Pool

##### All

```
{
  "operation": "poolAll",
  "request": {},
  "response": {
    "type": "object",
    "properties": {
      "pools": {
        "type": "array",
        "items": {
          "$ref": "#/cip-139/Pool"
        }
      }
    },
    "required": [
      "pools"
    ]
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get all known stake pools

##### Id

```
{
  "operation": "poolId",
  "request": {
    "$ref": "#/cip-139/PoolPubKeyHash"
  },
  "response": {
    "$ref": "#/cip-139/Pool"
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get a specific stake pool by id

#### Proposal

##### All

```
{
  "operation": "proposalAll",
  "request": {},
  "response": {
    "type": "object",
    "properties": {
      "proposals": {
        "type": "array",
        "items": {
          "$ref": "#/cip-139/Proposal"
        }
      }
    },
    "required": [
      "proposals"
    ]
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get all known proposals

##### Id

```
{
  "operation": "proposalId",
  "request": {
    "$ref": "#/cip-139/ProposalId"
  },
  "response": {
    "$ref": "#/cip-139/Proposal"
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get a specific proposal by id

#### Era

##### Summary

```
{
  "operation": "eraSummary",
  "request": {},
  "response": {
    "type": "object",
    "properties": {
      "summary": {
        "type": "array",
        "items": {
          "$ref": "#/cip-139/EraSummary"
        }
      }
    },
    "required": [
      "summary"
    ]
  },
  "errors": [
    {
      "$ref": "#/appendix/APIError"
    }
  ]
}
```

Get the start and end of each era along with parameters that can vary between hard forks

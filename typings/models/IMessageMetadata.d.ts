import { LedgerInclusionState } from "./ledgerInclusionState";
/**
 * Response from the metadata endpoint.
 */
export interface IMessageMetadata {
    /**
     * The message id.
     */
    messageId: string;
    /**
     * The parent message ids.
     */
    parents?: string[];
    /**
     * Is the message solid.
     */
    isSolid?: boolean;
    /**
     * Is the message referenced by a milestone.
     */
    referencedByMilestoneIndex?: number;
    /**
     * Is this message a valid milestone.
     */
    milestoneIndex?: number;
    /**
     * The ledger inclusion state.
     */
    ledgerInclusionState?: LedgerInclusionState;
    /**
     * Should the message be promoted.
     */
    shouldPromote?: boolean;
    /**
     * Should the message be reattached.
     */
    shouldReattach?: boolean;
}

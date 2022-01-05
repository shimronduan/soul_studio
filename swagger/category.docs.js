
/**
 * @swagger
 * /categories/{category_id}/products:
 *   get:
 *     summary: Returns the list of products by id
 *     tags: [Categories]
 *     parameters:
 *      - in: path
 *        name: category_id
 *        schema:
 *          type: string
 *        required: true
 *        description: The category_id
 *     responses:
 *       200:
 *         description: The list of the product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 
 *                 data:
 *                   type: array
 *                   items:
 *                      $ref: '#/components/schemas/Product'
 *                 success:
 *                   type: boolean
 *                   example: true
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Returns the list of all the categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: The list of the categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */


/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *          properties:
 *            name:
 *              type: string
 *            parent:
 *              type: string
 *          example:
 *            name: 'category 123'
 *            parent: '61d58e85fd5589b85cc33353'
 *     responses:
 *       201:
 *         description: The list of the categories
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: 61d58e85fd5589b85cc32353
 *                 name:
 *                   type: string
 *                   example: category 123
 *                 success:
 *                   type: boolean
 *                   example: true
 */